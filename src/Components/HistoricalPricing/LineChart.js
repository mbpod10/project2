import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const data = {
    labels: props.date,
    datasets: [
      {
        label: "Exchange Rate Against The Euro",
        data: props.exchangeRate,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
