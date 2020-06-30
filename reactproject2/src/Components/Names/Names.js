import React, { useEffect, useState } from "react";

const Names = (props) => {
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

  const symbolArrayDisplay = symbolArray.map((element, index) => {
    return (
      <h4 className="table-h4" key={index}>
        {element}
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
      <h1 className="individual-currency-h1">Currency Names AND Symbols</h1>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th className="nameTr"> Currency Symbol</th>
            <th className="nameTr">Currency Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="nameTr">{symbolArrayDisplay}</td>
            <td className="nameTr">{nameArrayDisplay}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Names;
