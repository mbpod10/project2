import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IndividualCurrency = (props) => {
  //console.log(props);
  let symbol = props.match.params.symbol;
  const [currency, getCurrency] = useState([]);
  const [date, getDate] = useState("");
  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?from=${symbol}`
      );
      const data = await res.json();
      //console.log("data", data);
      // console.log("date", data.date);

      getDate(data.date);
      getCurrency(data.rates);
    };
    makeApiCall();
  }, []);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?from=${symbol}`
      );
      const data = await res.json();
      //console.log("data", data);
      //console.log("date", data.date);
      getDate(data.date);
      getCurrency(data.rates);
    };
    makeApiCall();
  }, [symbol]);

  // console.log("currency", currency);

  const currencyKeyArray = Object.keys(currency).map((element, index) => {
    return (
      <h4 key={index}>
        <Link to={`/currencies/${element}`}>{element} </Link> / {symbol}:
      </h4>
    );
  });

  const currencyValuesArray = Object.values(currency).map((element, index) => {
    return <h4 key={index}>{element}</h4>;
  });

  //console.log(currencyValuesArray, currencyValuesArray);

  return (
    <>
      <h1>
        Rates Against: {symbol} ({date})
      </h1>
      <div className="currency-container">
        <div>{currencyKeyArray} </div>
        <div>{currencyValuesArray}</div>
      </div>
    </>
  );
  // return <h1>Individual Currency</h1>;
};

export default IndividualCurrency;
