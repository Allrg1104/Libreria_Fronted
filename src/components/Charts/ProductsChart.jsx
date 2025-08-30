import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const numberFormatter = (value) =>
  new Intl.NumberFormat("es-CO").format(value);

const ProductsChart = ({ data }) => (
  <div className="bg-white shadow rounded-2xl p-4">
    <h3 className="text-lg font-semibold mb-4">Top 10 Productos</h3>
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <XAxis dataKey="producto" />
        <YAxis tickFormatter={numberFormatter} />
        <Tooltip formatter={numberFormatter} />
        <Legend />
        <Bar dataKey="cantidad" name="Cantidad" fill="#3b82f6" />
        <Bar dataKey="valor" name="Valor" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ProductsChart;
