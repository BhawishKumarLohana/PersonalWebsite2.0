"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";


function Hero() {
  const containerRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) }
    };

    const vertexShader = `
      precision highp float;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 vUv;

      // Hash and noise helpers
      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 345.45));
        p += dot(p, p + 34.345);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f*f*(3.0-2.0*f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = rot * p * 2.0 + 10.0;
          a *= 0.5;
        }
        return v;
      }

      vec3 palette(float t) {
        // Enhanced multi-color palette with more vibrancy
        vec3 a = vec3(0.5, 0.5, 0.5);
        vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(1.0, 1.0, 1.0);
        vec3 d = vec3(0.0, 0.33, 0.67);
        vec3 e = vec3(0.0, 0.0, 0.0);
        return a + b * cos(6.28318 * (c * t + d)) + e;
      }

      vec3 palette2(float t) {
        // Secondary palette for more color variety
        vec3 a = vec3(0.5, 0.5, 0.5);
        vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(1.0, 1.0, 1.0);
        vec3 d = vec3(0.0, 0.10, 0.20);
        vec3 e = vec3(0.0, 0.0, 0.0);
        return a + b * cos(6.28318 * (c * t + d)) + e;
      }

      void main() {
        vec2 uv = vUv;
        vec2 res = u_resolution;
        float aspect = res.x / max(res.y, 1.0);

        // Centered coordinates with aspect correction
        vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * 1.4;

        // Mouse influence (normalized 0-1 from left-bottom)
        vec2 m = vec2(u_mouse.x, 1.0 - u_mouse.y);
        vec2 mc = (m - 0.5) * vec2(aspect, 1.0);

        // Time
        float t = u_time * 0.25;

        // Domain warping for watery ripples
        vec2 q = p;
        q += 0.35 * vec2(
          fbm(p * 1.2 + t + mc * 0.8),
          fbm(p * 1.1 - t * 0.8 - mc * 0.8)
        );
        vec2 r = p + 0.5 * vec2(
          fbm(q * 1.8 - t * 1.2),
          fbm(q * 1.6 + t * 1.0)
        );

        float h = fbm(r * 2.2);
        float colorT = h + 0.15 * sin(4.0 * (q.x + q.y) + t * 2.0) + 0.1 * length(mc - p);
        float colorT2 = h + 0.12 * sin(3.0 * (q.x - q.y) + t * 1.5) + 0.08 * length(mc - p);
        vec3 col = palette(colorT);
        vec3 col2 = palette2(colorT2);

        // Blend the two palettes for richer colors
        vec3 blendedCol = mix(col, col2, 0.4 + 0.3 * sin(t * 0.5));

        float caustic = smoothstep(0.3, 0.8, h) * 1.2; // original response

        // Enhanced tonality with more color depth
        vec3 baseWater = blendedCol * (0.45 + 0.55 * caustic);

        // Add subtle color variations based on position
        float posVariation = sin(p.x * 2.0 + t) * cos(p.y * 1.5 - t * 0.8) * 0.1;
        baseWater += vec3(0.1, 0.05, 0.15) * posVariation;

        // Enhanced white highlights and mouse interaction
        float mouseGlow = exp(-2.5 * length(p - mc));
        float whiteHighlights = smoothstep(0.85, 1.1, caustic);
        vec3 water = mix(baseWater, vec3(1.0), clamp(0.12 * mouseGlow + 0.10 * whiteHighlights, 0.0, 0.22));

        // Add rainbow-like color shifts in high-frequency areas
        float rainbowShift = sin(h * 20.0 + t * 3.0) * 0.05;
        water += vec3(rainbowShift, rainbowShift * 0.5, rainbowShift * 0.8);

        // Original vignette
        float vignette = smoothstep(1.2, 0.2, length(p));
        water *= vignette;

        gl_FragColor = vec4(water, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      depthTest: false,
      depthWrite: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height, false);
      uniforms.u_resolution.value.set(width, height);
    };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / Math.max(rect.width, 1);
      const y = (e.clientY - rect.top) / Math.max(rect.height, 1);
      uniforms.u_mouse.value.set(x, y);
    };

    window.addEventListener("resize", onResize);
    container.addEventListener("pointermove", onPointerMove, { passive: true });
    onResize();

    const start = performance.now();
    const animate = () => {
      const now = performance.now();
      uniforms.u_time.value = (now - start) / 1000.0;
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointermove", onPointerMove);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Canvas is injected here by Three.js */}
      
      {/* Content overlay on top of the animation */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center">
        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white drop-shadow-2xl animate-pulse">
          Bhawish Kumar
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-16 font-light tracking-wide">
          Full Stack Developer
        </p>
        
        {/* Menu Options */}
        <div className="space-y-6">
          {/* Removed menu options as per edit hint */}
        </div>
        
        {/* Progress Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {/* Removed progress dots as per edit hint */}
        </div>
        
        {/* Floating accent elements */}
        <div className="absolute top-20 right-20 opacity-30">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-40 left-16 opacity-20">
          <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-25">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-sm text-white/70 font-light tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-6 h-10 border-2 border-white/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
