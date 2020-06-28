import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "./SideNav.css";

const SideNav = (props) => {
  const mappedKeys = props.currencyKeys.map((element, index) => {
    return (
      <h6 className="symbol" key={index}>
        {element}
      </h6>
    );
  });

  return (
    <>
      <div className="left-screen">
        <h1 className="currencySymbols">{mappedKeys}</h1>
      </div>
    </>
  );
};

export default SideNav;

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
//   }
