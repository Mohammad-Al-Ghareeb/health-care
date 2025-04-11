// PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Emergency", "ICU", "Neurology", "Cardiology", "Gynaecology"],
    datasets: [
      {
        label: "Number of Staffs According to Departments",
        data: [12, 19, 3, 5, 2], // Replace with your data
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)", // Emergency
          "rgba(255, 99, 132, 0.6)", // ICU
          "rgba(255, 206, 86, 0.6)", // Neurology
          "rgba(75, 192, 192, 0.6)", // Cardiology
          "rgba(153, 102, 255, 0.6)", // Gynaecology
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // This allows the height and width to be set
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Pie data={data} options={chartOptions} />
    </div>
  );
};

export default PieChart;
