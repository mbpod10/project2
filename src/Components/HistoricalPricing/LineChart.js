import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const data = {
    labels: props.date,
    datasets: [
      {
        label:
          "Exchange Rate Of (x) " +
          props.symbol +
          " = 1 Euro (Higher Rates Means " +
          props.symbol +
          " Is Less Valuable)",
        data: props.exchangeRate,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
