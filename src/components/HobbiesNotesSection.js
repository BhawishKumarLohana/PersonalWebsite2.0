"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, Sector } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Physical", value: 20, images: ["images/Cycling.jpg"] },
  { name: "Fun", value: 30, images: ["images/Traveling.jpg"] },
  { name: "Mental", value: 50, images: ["images/Debating.jpg", "images/Reflection.jpg"] },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function HobbyPieChart() {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [outerRadius, setOuterRadius] = useState(200);
  const [chartSize, setChartSize] = useState(520);

  useEffect(() => {
    const computeRadius = () => {
      const width = window.innerWidth;
      if (width < 640) return 120;
      if (width < 1024) return 170;
      return 220;
    };
    const computeChartSize = () => {
      const width = window.innerWidth;
      if (width < 640) return 360;
      if (width < 1024) return 520;
      return 620;
    };

    setOuterRadius(computeRadius());
    setChartSize(computeChartSize());
    const onResize = () => {
      setOuterRadius(computeRadius());
      setChartSize(computeChartSize());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  const onPieEnter = (_entry, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.75;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: 14, fontWeight: 600, textShadow: "0 2px 6px rgba(0,0,0,0.45)" }}
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={outerRadius + 12}
          outerRadius={outerRadius + 18}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          opacity={0.25}
        />
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 relative group">
        What I Do For Myself
        <span className="px-2 py-2 mt-11 absolute left-1/2 transform -translate-x-1/2 text-base md:text-lg font-semibold text-yellow-500 opacity-0 group-hover:opacity-100 animate-pulse transition duration-1000 ease-in-out drop-shadow-lg">
        </span>
      </h2>
      <p className="text-sm md:text-base text-gray-300 mb-8">Tap on a slice to view photos</p>
      {!selected && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="w-full flex justify-center">
              <PieChart width={chartSize} height={chartSize}>
                <defs>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.3" />
                  </filter>
                </defs>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={outerRadius - 70}
                  outerRadius={outerRadius}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  onClick={(entry) => setSelected(entry)}
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className="cursor-pointer"
                      filter="url(#shadow)"
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17,24,39,0.9)",
                    border: "1px solid #374151",
                    borderRadius: "0.5rem",
                    color: "#fff",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
                    backdropFilter: "blur(6px)",
                  }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  wrapperStyle={{ fontSize: 14, color: "#e5e7eb" }}
                />
              </PieChart>
          </div>
        </motion.div>
      )}

      {selected && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md flex flex-col items-center justify-center p-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Close"
              onClick={() => setSelected(null)}
              className="absolute right-0 -top-2 md:-top-6 px-3 py-1.5 md:px-4 md:py-2 bg-red-500/90 hover:bg-red-600 text-white rounded-full shadow-lg"
            >
              ✕
            </button>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{selected.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {selected.images.map((src, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt="hobby"
                  className="rounded-2xl shadow-xl ring-1 ring-white/10 max-h-[280px] md:max-h-[340px] w-full object-cover"
                  whileHover={{ scale: 1.03 }}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setSelected(null)}
                className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-base md:text-lg font-semibold border border-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}


