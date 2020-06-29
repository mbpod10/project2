import React, { useEffect, useState } from "react";

const Names = (props) => {
  console.log(props.nameAndSymbolArray);
  let tempArray = [];
  for (let i = 0; i < props.nameAndSymbolArray.length; i++) {
    tempArray.push(props.nameAndSymbolArray[i].join(" = "));
  }

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
