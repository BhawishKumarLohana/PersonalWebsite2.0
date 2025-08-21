import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Physical", value: 20, images: ["images/Cycling.jpg"] },
  { name: "Fun", value: 30, images: ["images/Traveling.jpg"] },
  { name: "Mental", value: 50, images: ["images/Debating.jpg", "images/Reflection.jpg"] },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function HobbyPieChart() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 relative group">
        What I Do For Myself
        <span className="px-2 py-2 mt-11 absolute left-1/2 transform -translate-x-1/2 text-base md:text-lg font-semibold text-yellow-500 opacity-0 group-hover:opacity-100 animate-pulse transition duration-1000 ease-in-out drop-shadow-lg">
        </span>
      </h2>
      {!selected && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      
          <PieChart width={700} height={700}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={250}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelStyle={{ fontSize: "20px", fill: "white" }}
              onClick={(entry) => setSelected(entry)}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="cursor-pointer" />
              ))}
            </Pie>
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "18px", color: "white" }} />
          </PieChart>
        </motion.div>
      )}

      {selected && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center p-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">{selected.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selected.images.map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt="hobby"
                className="rounded-2xl shadow-lg max-h-[400px] object-cover"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
          <button
            onClick={() => setSelected(null)}
            className="mt-10 px-6 py-3 bg-red-500 text-white rounded-xl text-lg font-semibold hover:bg-red-600"
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
}


