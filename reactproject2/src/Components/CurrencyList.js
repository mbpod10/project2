import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CurrencyList = () => {
  const [currency, getCurrency] = useState([]);
  const [symbol, getSymbol] = useState("USD");
  const [date, getDate] = useState("");
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
  }, []);

  //console.log("currency", currency);

  const currencyKeyArray = Object.keys(currency).map((element, index) => {
    return (
      <h4 key={Math.floor(Math.random() * 10000)}>
        <Link to={`/currencies/${element}`}>{element} </Link> / {symbol}:
      </h4>
    );
  });

  const currencyValuesArray = Object.values(currency).map((element, index) => {
    return <h4 key={Math.floor(Math.random() * 10000)}>{element}</h4>;
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
};
export default CurrencyList;

//https://www.frankfurter.app/docs/
