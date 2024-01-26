import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export default function Donut() {
  const state = {
    labels: ["Garbage Tax", "Property Tax", "Water Tax"],
    datasets: [
      {
        data: [2000, 3000, 1000],
        backgroundColor: ["#FF6183", "#FFCE56", "#36A2EB"],
        hoverBorderWidth: 3,
        offset: 30,
        borderRadius: 1,
      },
    ],
  };

  const options = {
    cutoutPercentage: 60,
    responsive: false,
    legend: {
      display: true,
    //   position: "right",
    },
    tooltips: {
      callbacks: {
        title: (items, data) => {
          let x = Math.ceil(data.datasets[items[0].datasetIndex].data[items[0].index]);
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        label: (items, data) => data.labels[items.index],
      },
      backgroundColor: "#FFF",
      borderColor: "rgb(0,0,0)",
    //   titleFontSize: 5,
      titleFontColor: "#000",
      bodyFontColor: "#000",
    //   bodyFontSize: 10,
      displayColors: false,
    },
  };

  return (
    <div className="App">
      <div className="chart" style={{ width: "300px",height:"28vh" }}>
       
      </div>
    </div>
  );
}
