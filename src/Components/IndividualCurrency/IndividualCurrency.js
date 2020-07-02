import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "./IndividualCurrency.css";

const IndividualCurrency = (props) => {
  let symbol = props.match.params.symbol;
  const [currency, getCurrency] = useState([]);
  const [date, getDate] = useState("");
  const [converArray, getConverArray] = useState([]);
  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?from=${symbol}`
      );
      const data = await res.json();
      console.log("data.rates", data.rates);
      const data2 = data.rates;

      getDate(data.date);
      getCurrency(data.rates);
      const tempArray = Object.keys(data.rates);
      getConverArray(tempArray);
    };
    makeApiCall();
  }, []);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?from=${symbol}`
      );
      const data = await res.json();
      getDate(data.date);
      getCurrency(data.rates);
      const tempArray = Object.keys(data.rates);
      getConverArray(tempArray);
    };
    makeApiCall();
  }, [symbol]);

  const ultArray = [];

  for (let i = 0; i < converArray.length; i++) {
    ultArray.push(converArray[i], props.nameArray[i]);
  }

  const currencyKeyArray = Object.keys(currency).map((element, index) => {
    return (
      <>
        <h4 className="table-h4" key={index}>
          <Link to={`/currencies/${element}`}>{element} </Link>
        </h4>
      </>
    );
  });

  const tempArray = Object.keys(currency).map((element, index) => {
    return <>{element}</>;
  });

  const currencyKeyArray2 = Object.keys(currency).map((element, index) => {
    for (let i = 0; i < props.nameArray.length; i++) {
      return (
        <>
          <h4 className="table-h4" key={index}>
            <Link to={`/currencies/${element}`}>
              {element} {props.nameArray[i]}
            </Link>
          </h4>
        </>
      );
    }
  });

  const currencyValuesArray = Object.values(currency).map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        {element}
      </h4>
    );
  });

  const symbolArray = currencyValuesArray.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        {symbol}
      </h4>
    );
  });

  const oneArray = currencyValuesArray.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        1
      </h4>
    );
  });

  const equalArray = currencyValuesArray.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        =
      </h4>
    );
  });

  return (
    <div className="table-div">
      <h1 className="individual-currency-h1">
        Rates Against: {symbol} ({date})
      </h1>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th> </th>
            <th>Currency</th>
            <th> </th>
            <th>{date} Exchange Rate</th>
            <th>Base Currency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{oneArray}</td>
            <td>{symbolArray}</td>
            <td>{equalArray}</td>
            <td>{currencyValuesArray}</td>
            <td>{currencyKeyArray}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default IndividualCurrency;
