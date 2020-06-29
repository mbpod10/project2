import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "./IndividualCurrency.css";

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

  // return <h1>Individual Currency</h1>;

  const currencyKeyArray = Object.keys(currency).map((element, index) => {
    return (
      <>
        <h4 className="table-h4" key={index}>
          <Link to={`/currencies/${element}`}>{element} </Link>
        </h4>
      </>
    );
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

// const currencyKeyArray = Object.keys(currency).map((element, index) => {
//   return (
//     <h4 key={index}>
//       <Link to={`/currencies/${element}`}>{element} </Link> / {symbol}:
//     </h4>
//   );
// });

// const currencyValuesArray = Object.values(currency).map((element, index) => {
//   return <h4 key={index}>{element}</h4>;
// });

// //console.log(currencyValuesArray, currencyValuesArray);

// return (
//   <div>
//     <h1>
//       Rates Against: {symbol} ({date})
//     </h1>
//     <div className="currency-container">
//       <div>{currencyKeyArray} </div>
//       <div>{currencyValuesArray}</div>
//     </div>
//   </div>
// );
