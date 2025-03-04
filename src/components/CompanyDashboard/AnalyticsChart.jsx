import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const RecruitmentAnalyticsChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Recruitments",
        data: [30, 20, 50, 60, 70, 90, 100, 80, 60, 50, 40, 30],
        fill: false,
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        borderColor: "rgba(34, 197, 94, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <div className="w-full h-96">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RecruitmentAnalyticsChart;
