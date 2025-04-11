// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Emergency", "ICU", "Neurology", "Cardiology", "Gynaecology"],
    datasets: [
      {
        data: [500, 1200, 800, 2500, 300], // Replace with your data
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)", // Emergency
          "rgba(255, 206, 86, 0.6)", // ICU
          "rgba(255, 99, 132, 0.6)", // Neurology
          "rgba(153, 102, 255, 0.6)", // Cardiology
          "rgba(75, 192, 192, 0.6)", // Gynaecology
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Maximum Number of Employees in Departments",
      },
    },
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
  };

  return (
    <div style={{ height: "400px", width: "600px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
