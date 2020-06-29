import React, { useEffect, useState } from "react";

const HistoricalPricing = (props) => {
  const [currencyToBeConverted, setCurrencyConverter] = useState([]);
  const [euro, getEuro] = useState("");
  const [date, getDate] = useState([]);
  const [exchangeRate, getExchangeRate] = useState([]);
  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/2020-01-01..?to=USD`
      );
      const data = await res.json();
      //console.log(data);
      getEuro(data.base);
      const tempDate = Object.keys(data.rates);
      getDate(tempDate);
      console.log(data.rates);
      const tempArray = Object.values(data.rates).map((element, index) => {
        return element;
      });
      const tempExchangeRate = Object.values(tempArray).map(
        (element, index) => {
          return element;
        }
      );
      const tempDataArray = [];
      for (const property in tempExchangeRate) {
        tempDataArray.push(tempExchangeRate[property].USD);
      }
      //getExchangeRate(tempExchangeRate);
      //const tempExchangeRate = Object.values(data.rates.USD);
      //const tempArray = Object.values(tempExchangeRate);
      getExchangeRate(tempDataArray);
    };
    makeApiCall();
  }, []);

  console.log(euro);
  console.log(date);
  console.log(exchangeRate);

  const euroArray = date.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        {euro}
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
      {/* <form>
        <form onSubmit={handleSubmit}>
     <select onChange={handleChange1}>{mappedLabel}</select>
      <select onChange={handleChange2}>{mappedLabel}</select> 
        <input type="submit" /> 
      </form> */}

      <div className="table-div">
        <h1 className="individual-currency-h1">Historical Data</h1>
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Currency</th>
              <th> Date </th>
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
  );
};
export default HistoricalPricing;
