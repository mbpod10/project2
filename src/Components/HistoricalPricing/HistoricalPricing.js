import React, { useEffect, useState } from "react";
import HistoricalPriceForm from "./HistoricalPricingForm";
import "./HistoricalPricing.css";
import StandardDeviation from "./StandardDeviation";
import LineChart from "./LineChart";

const HistoricalPricing = (props) => {
  const [symbol, getSymbol] = useState("");
  const [euro, getEuro] = useState("");
  const [date, getDate] = useState([]);
  const [exchangeRate, getExchangeRate] = useState([]);
  const [startDate, getStartDate] = useState("");
  const [endDate, getEndDate] = useState("");
  const [userInputYear, getUserInputYear] = useState("");
  const [userInputDay, getUserInputDay] = useState("");
  const [userInputMonth, getUserInputMonth] = useState("");
  const [lowerLimit, getLowerLimit] = useState("");
  const [upperLimit, getUpperLimit] = useState("");

  const getLowerBound = (event) => {
    getLowerLimit(event);
  };

  const getUpperBound = (event) => {
    getUpperLimit(event);
  };

  const handleChange1 = (event) => {
    getSymbol(event);
  };

  const handleChange2 = (event) => {
    getUserInputMonth(event);
  };

  const handleChange3 = (event) => {
    getUserInputDay(event);
  };
  const handleChange4 = (event) => {
    getUserInputYear(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInputDate = `${userInputYear}-${userInputMonth}-${userInputDay}`;
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/${userInputDate}..?to=${symbol}`
      );
      const data = await res.json();

      getEuro(data.base);
      const tempDate = Object.keys(data.rates);
      getDate(tempDate);

      const firstDate = tempDate[0];

      getStartDate(data.start_date);
      getEndDate(data.end_date);
      const tempArray = Object.values(data.rates).map((element, index) => {
        return element;
      });
      const tempExchangeRate = Object.values(tempArray).map(
        (element, index) => {
          return element;
        }
      );
      const tempDataArray = [];
      const tempSymbolArray = tempDataArray[0];

      const hello = tempExchangeRate[0];
      const hill = Object.keys(hello).map((element, index) => {
        return element;
      });
      const hilly = hill.join(" ");

      if (tempExchangeRate.length > 0) {
        for (const property in tempExchangeRate) {
          tempDataArray.push(tempExchangeRate[property][symbol]);
        }
      }

      getExchangeRate(tempDataArray);
    };
    makeApiCall();
  };

  const euroArray = date.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        {symbol} <span className="change"> / {euro} </span>
      </h4>
    );
  });

  const dateArray = date.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        {element}
      </h4>
    );
  });

  const exchangeRateArray = exchangeRate.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        {element}
      </h4>
    );
  });

  return (
    <div className="hisoricalDataDiv">
      <HistoricalPriceForm
        currencyKeys={props.currencyKeys}
        handleSubmit={handleSubmit}
        handleChange1={handleChange1}
        handleChange2={handleChange2}
        handleChange3={handleChange3}
        handleChange4={handleChange4}
      />
      <div>
        <StandardDeviation
          exchangeRate={exchangeRate}
          endDate={endDate}
          getLowerBound={getLowerBound}
          getUpperBound={getUpperBound}
        />
      </div>
      {endDate ? (
        <>
          <div className="chart">
            <LineChart
              exchangeRate={exchangeRate}
              date={date}
              symbol={symbol}
            />
          </div>
          <div className="table-div">
            <h1 className="individual-currency-h1 ">
              Historical Data (Against The Euro)
            </h1>
            <table className="table table-dark table-bordered">
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>
                    ({startDate}) -- ({endDate})
                  </th>
                  <th>Exchange Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{euroArray}</td>
                  <td>{dateArray}</td>
                  <td>{exchangeRateArray}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : null}
    </div>
  );
};
export default HistoricalPricing;
