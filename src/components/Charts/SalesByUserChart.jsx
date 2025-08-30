import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#8dd1e1", "#a4de6c", "#d0ed57", "#ffc0cb"];

const numberFormatter = (value) =>
  new Intl.NumberFormat("es-CO").format(value);

const SalesByUserChart = ({ data }) => {
  const [filtro, setFiltro] = useState("cantidad");

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Top Vendedores</h3>
        <select
          className="border p-2 rounded"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="cantidad">Por Cantidad</option>
          <option value="valor">Por Valor</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey={filtro}
            nameKey="usuario" // nombre tal como viene del backend
            cx="50%"
            cy="50%"
            outerRadius={110}
            label={(entry) =>
              `${entry.usuario}: ${numberFormatter(entry[filtro])}`
            }
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip formatter={numberFormatter} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesByUserChart;