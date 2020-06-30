import React, { useEffect, useState } from "react";

const HistoricalPriceForm = (props) => {
  const mappedLabel = props.currencyKeys.map((element, index) => {
    return (
      <option key={index} value={element}>
        {element}
      </option>
    );
  });

  const handleChange1 = (event) => {
    props.handleChange1(event.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <select onChange={handleChange1}>{mappedLabel}</select>
      {/* <select onChange={handleChange2}></select>  */}
      <input type="submit" />
    </form>
  );
};

export default HistoricalPriceForm;
