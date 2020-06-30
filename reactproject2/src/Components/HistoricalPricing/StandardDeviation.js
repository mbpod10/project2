import React, { useState } from "react";

const StandardDeviation = (props) => {
  const [SD, getStandardDev] = useState("");
  const [upperLimit, getUpperLimit] = useState("");
  const [lowerLimit, getLowerLimit] = useState("");
  const [average, getAverage] = useState("");
  const [secondUpper, getSecondUpper] = useState("");
  const [secondLower, getSecondLower] = useState("");
  const [thirdUpper, getThirdUpper] = useState("");
  const [thirdLower, getThirdLower] = useState("");
  console.log(props.exchangeRate);
  const calculateStandardDeviation = () => {
    const sum = props.exchangeRate.reduce((element, index) => {
      return element + index;
    });
    console.log("sum", sum);
    const average = sum / props.exchangeRate.length;
    console.log("ave", average);
    getAverage(average);
    const minusAverage = props.exchangeRate.map((element, index) => {
      return element - average;
    });
    console.log("minus ave", minusAverage);
    const square = minusAverage.map((element, index) => {
      return element * element;
    });
    console.log("square", square);
    const sumOfSquare = square.reduce((element, index) => {
      return element + index;
    });
    console.log("sumOfSquare", sumOfSquare);
    const variance = sumOfSquare * (1 / props.exchangeRate.length);
    console.log("variance", variance);
    const standardDeviation = Math.sqrt(variance);
    console.log("standard deviation", standardDeviation);
    getStandardDev(standardDeviation);
    const firstUpper = average + standardDeviation;
    getUpperLimit(firstUpper);
    const firstLower = average - standardDeviation;
    getLowerLimit(firstLower);
    const secondUpper = firstUpper + standardDeviation;
    getSecondUpper(secondUpper);
    const secondLower = firstLower - standardDeviation;
    getSecondLower(secondLower);
    const thirdUpper = secondUpper + standardDeviation;
    getThirdUpper(thirdUpper);
    const thirdLower = secondLower - standardDeviation;
    getThirdLower(thirdLower);
    console.log(
      firstUpper,
      firstLower
      //   secondLower,
      //   secondUpper,
      //   thirdLower,
      //   thirdUpper
    );
  };

  return (
    <>
      {props.endDate ? (
        <input
          type="button"
          onClick={calculateStandardDeviation}
          value="Calculate Standard Deviation"
        />
      ) : null}
      {SD ? (
        <>
          <div className="table-div">
            <table className="table table-dark table-bordered">
              <thead>
                <tr>
                  <th>Average Price</th>
                  <th>Standard Deviation</th>
                  <th>1SD Lower - Upper</th>
                  <th>2SD Lower - Upper</th>
                  <th>3SD Lower - Upper</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{average.toFixed(8)}</td>
                  <td>{SD.toFixed(8)}</td>
                  <td>
                    {lowerLimit.toFixed(8)} - {upperLimit.toFixed(8)}
                  </td>
                  <td>
                    {secondLower.toFixed(8)} - {secondUpper.toFixed(8)}
                  </td>
                  <td>
                    {thirdLower.toFixed(8)} - {thirdUpper.toFixed(8)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : null}
    </>
  );
};

export default StandardDeviation;
