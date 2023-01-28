import React from "react";
import { Line } from "react-chartjs-2";
import "../../assets/css/linechart.css";

function LineChart() {
  const data = {
    labels: ["Approve", "Disapprove"],
    datasets: [
      {
        label: "All Request",
        data: [20, 50],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: ["rgba(255,206,86,0.2)"],
        pointBackgroundColor: ["rgba(255,206,86,0.2)"],
        pointBorderColor: ["rgba(255,206,86,0.2)"],
      },
    ],
  };
  const options = {
    responsive: true,
    title: {
      display: true,
      text: "Request Statistics",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
          gridLines: {
            display: true,
          },
        },
      ],
    },
  };
  return (
    <div className="lineChart">
      <Line data={data} width={150} height={50} options={options} />
    </div>
  );
}

export default LineChart;
