import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  console.log("props", props);
  //props.date
  //props.exchangeRate
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
  // return <h1>Hi</h1>;
};

export default LineChart;
