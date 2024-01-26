import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // 1. Import Filler plugin
} from "chart.js";

// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Register Filler plugin
);

export const options = {
  responsive: true,
  maintainAspectRatio:false,
  tension: 0.4,
  scales: {
    y: {
      ticks: {
        min: 100000,
        max: 10000,
        stepSize: 10000,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Paid tax",
      data: [
        60000, 30000, 50000, 90000, 25000, 30244, 56473, 45733, 90342,
        21343, 23720, 33323,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255,0,0,0.6)",
      fill: {
        target: "origin", // Set the fill options
        above: "rgba(255, 0, 0, 0.3)",
      },
    },
  ],
};

export function LineGraph() {
  return <Line options={options} data={data}/>;
}
