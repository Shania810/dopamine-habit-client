import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import randomColor from "./colors/colors";

export const BarChart = ({ charData }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = charData.map(
    ({ title }) => title[0].toUpperCase() + title.slice(1, title.length)
  );

  const daysCompleted = charData.map(({ days_completed }) => days_completed);
  const data = {
    labels,
    datasets: [
      {
        label: "Days completed",
        data: daysCompleted,
        backgroundColor: randomColor(labels[0]),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <Bar
      style={{ width: 1000, height: 200, margin: 20 }}
      options={options}
      data={data}
    />
  );
};
