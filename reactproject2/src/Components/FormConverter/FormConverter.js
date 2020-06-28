import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./FormConverter.css";

const FormConverter = (props) => {
  const [firstCurrency, getFirstCurrency] = useState("AUD");
  const [secondCurrency, getSecondCurrency] = useState("AUD");
  const [currency, getCurrency] = useState([]);
  const [exchangeRate, setExchangeRate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("PreventDefault");
    const makeApiCall = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?from=${firstCurrency}`
      );
      const data = await res.json();
      //   console.log(data);
      //   console.log(data.rates);
      getCurrency(data.rates);
      for (const property in currency) {
        if (property === secondCurrency) {
          setExchangeRate(currency[property]);
        }
      }
    };
    makeApiCall();
  };

  const handleChange1 = (event) => {
    getFirstCurrency(event.target.value);
  };

  const handleChange2 = (event) => {
    getSecondCurrency(event.target.value);
  };

  //   console.log(firstCurrency, secondCurrency);
  //   console.log("currency", currency);
  //   console.log(currency.secondCurrency);
  //   console.log(exchangeRate);

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
      {/* <form onSubmit={handleSubmit}>
        <select onChange={handleChange1}>{mappedLabel}</select>
        <select onChange={handleChange2}>{mappedLabel}</select>
        <input type="submit" />
      </form> */}
      <ReactBootStrap.Form onSubmit={handleSubmit}>
        <ReactBootStrap.Form.Row className="align-items-center">
          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Form.Label
              className="mr-sm-2"
              for="inlineFormCustomSelect"
              srOnly
            >
              Preference
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onChange={handleChange1}
            >
              <option selected>Currency...</option>
              {mappedLabel}
            </ReactBootStrap.Form.Control>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Form.Label
              className="mr-sm-2"
              for="inlineFormCustomSelect"
              srOnly
            >
              Preference
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onChange={handleChange2}
            >
              <option selected>Currency...</option>
              {mappedLabel}
            </ReactBootStrap.Form.Control>
          </ReactBootStrap.Col>

          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Button type="submit">Submit</ReactBootStrap.Button>
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Row>
      </ReactBootStrap.Form>

      {exchangeRate ? (
        <h1>
          1 {firstCurrency} = {exchangeRate} {secondCurrency}
        </h1>
      ) : null}
    </>
  );
};

export default FormConverter;
