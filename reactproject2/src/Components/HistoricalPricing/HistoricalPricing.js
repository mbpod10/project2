import React, { useEffect, useState } from "react";
import HistoricalPricingForm from "./HistoricalPricingForm";
import HistoricalPriceForm from "./HistoricalPricingForm";

const HistoricalPricing = (props) => {
  const [symbol, getSymbol] = useState("");
  const [userInputDate, getUserInputDate] = useState("");
  const [euro, getEuro] = useState("");
  const [date, getDate] = useState([]);
  const [exchangeRate, getExchangeRate] = useState([]);
  const [startDate, getStartDate] = useState("");
  const [endDate, getEndDate] = useState("");

  const handleChange1 = (event) => {
    getSymbol(event);
  };

  const handleChange2 = (event) => {
    getUserInputDate(event);
  };
  console.log("symbol", symbol);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("prevented");
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/${userInputDate}..?to=${symbol}`
      );
      const data = await res.json();
      //console.log(data);
      getEuro(data.base);
      const tempDate = Object.keys(data.rates);
      getDate(tempDate);
      // console.log("tempDate", tempDate);
      const firstDate = tempDate[0];
      //console.log("firstDate", firstDate);
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
      // console.log("tempsymbolArray", tempSymbolArray);
      const hello = tempExchangeRate[0];
      const hill = Object.keys(hello).map((element, index) => {
        return element;
      });
      const hilly = hill.join(" ");
      // console.log(hilly);

      // console.log(hill);
      if (tempExchangeRate.length > 0) {
        for (const property in tempExchangeRate) {
          //   console.log("true");
          //   const othersym = symbol;
          tempDataArray.push(tempExchangeRate[property][symbol]);
        }
      }

      //   for (const property in tempExchangeRate) {
      //     tempSymbolArray.push(tempExchangeRate[0]);
      //   }

      // console.log(hello);
      //getExchangeRate(tempExchangeRate);
      //const tempExchangeRate = Object.values(data.rates.USD);
      //const tempArray = Object.values(tempExchangeRate);
      getExchangeRate(tempDataArray);
    };
    makeApiCall();
  };
  //console.log(euro);
  //console.log(date);
  //console.log(exchangeRate);

  const euroArray = date.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        {symbol} / {euro}
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
    <>
      <HistoricalPriceForm
        currencyKeys={props.currencyKeys}
        handleSubmit={handleSubmit}
        handleChange1={handleChange1}
        handleChange2={handleChange2}
      />

      {userInputDate ? (
        <div className="table-div">
          <h1 className="individual-currency-h1">
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
      ) : null}
    </>
  );
};
export default HistoricalPricing;
