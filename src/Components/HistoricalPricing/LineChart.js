import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  console.log("props", props);
  const data = {
    labels: props.date,
    datasets: [
      {
        label: "Exchange Rate",
        data: props.exchangeRate,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
