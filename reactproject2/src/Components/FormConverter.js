import React, { useEffect, useState } from "react";

const FormConverter = (props) => {
  const [firstCurrency, getFirstCurrency] = useState("GBP");
  const [secondCurrency, getSecondCurrency] = useState("USD");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  const handleChange1 = (event) => {
    getFirstCurrency(event.target.value);
  };

  const handleChange2 = (event) => {
    getSecondCurrency(event.target.value);
  };

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?to=${firstCurrency},${secondCurrency}`
      );
      const data = await res.json();
      console.log(data);
      console.log(data.rates);
      console.log(data.rates.secondCurrency);
    };
    makeApiCall();
  }, []);

  return (
    <>
      <h1>Currency Converter</h1>
      <form onSubmit={handleSubmit}>
        <label for="cars">Choose a currency:</label>
        <select onChange={handleChange1}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
        <label for="cars">Choose a Currency:</label>
        <select onChange={handleChange2}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
        <input type="submit" />
      </form>
      <h1>
        {firstCurrency} is equal to {secondCurrency}
      </h1>
    </>
  );
};

export default FormConverter;
