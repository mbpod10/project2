import React, { useEffect, useState } from "react";

const FormConverter = (props) => {
  const [firstCurrency, getFirstCurrency] = useState("AUD");
  const [secondCurrency, getSecondCurrency] = useState("AUD");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("PreventDefault");
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?to=${firstCurrency},${secondCurrency}`
      );
      const data = await res.json();
      console.log(data.rates);
    };
    makeApiCall();
  };

  const handleChange1 = (event) => {
    getFirstCurrency(event.target.value);
  };

  const handleChange2 = (event) => {
    getSecondCurrency(event.target.value);
  };

  console.log(firstCurrency, secondCurrency);

  const mappedLabel = props.currencyKeys.map((element, index) => {
    return (
      <option key={index} value={element}>
        {element}
      </option>
    );
  });

  return (
    <>
      <h1>Currency Converter</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange1}>{mappedLabel}</select>
        <select onChange={handleChange2}>{mappedLabel}</select>
        <input type="submit" />
      </form>
    </>
  );
};

export default FormConverter;
