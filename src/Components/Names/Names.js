import React, { useEffect, useState } from "react";
import "./Names.css";
import { Link } from "react-router-dom";

const Names = (props) => {
  const symbolArray = [];
  const nameArray = [];

  props.nameAndSymbolArray.forEach((element, index) => {
    symbolArray.push(element[0]);
  });

  props.nameAndSymbolArray.forEach((element, index) => {
    nameArray.push(element[1]);
  });

  const symbolArrayDisplay = symbolArray.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        <Link to={`/currencies/${element}`}>{element} </Link>
      </h4>
    );
  });

  const nameArrayDisplay = nameArray.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        {element}
      </h4>
    );
  });
  return (
    <div className="table-div">
      <h1 className="individual-currency-h1-names">
        Currency Names and Symbols
      </h1>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th className="nameTr"> Symbol</th>
            <th className="nameTr">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="nameTr-data">{symbolArrayDisplay}</td>
            <td className="nameTr-data">{nameArrayDisplay}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Names;
