import React, { useEffect, useState } from "react";

const Names = (props) => {
  let tempArray = [];

  const symbolArray = [];
  const nameArray = [];

  props.nameAndSymbolArray.forEach((element, index) => {
    symbolArray.push(element[0]);
  });

  props.nameAndSymbolArray.forEach((element, index) => {
    nameArray.push(element[1]);
  });

  console.log(symbolArray);
  console.log(nameArray);

  props.nameAndSymbolArray.forEach((element, index) => {
    tempArray.push(element.join(" = "));
  });

  const nameAndSymbol = tempArray.map((element, index) => {
    return (
      <h3 className="namesh3" key={index}>
        {element}
      </h3>
    );
  });

  return (
    <div className="table-div">
      <h1 className="individual-currency-h1">Names</h1>
      <table className="table table-dark table-bordered">
        <tbody>
          <tr>
            <td>{nameAndSymbol}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Names;
