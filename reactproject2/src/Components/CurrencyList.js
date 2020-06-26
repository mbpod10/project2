import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CurrencyList = () => {
  const [currency, getCurrency] = useState([]);
  const [symbol, getSymbol] = useState("USD");
  const [currencyNameList, getCurrencyNameList] = useState("");
  const [currencyName, getCurrencyName] = useState("");
  const [date, getDate] = useState("");
  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?from=${symbol}`
      );
      const data = await res.json();
      const resName = await fetch("https://api.frankfurter.app/currencies");
      const dataNames = await resName.json();
      // console.log(dataNames);
      // console.log(dataNames.symbol);
      //console.log("data", data);
      //console.log("date", data.date);
      getDate(data.date);
      getCurrency(data.rates);
      getCurrencyNameList(dataNames);
      getCurrencyName(currencyNameList.symbol);
    };
    makeApiCall();
    //here call another method, the method will take currency and pull out its value that way we know for a fact, everything will be in state
  }, []);
  console.log("symbol", symbol);
  console.log("currencyNameList", currencyNameList.symbol);
  console.log("currencyName", currencyName);
  //console.log("currency", currency);
  console.log(currencyNameList);

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
};
export default CurrencyList;

//https://www.frankfurter.app/docs/
