import React, { useEffect, useState } from "react";

const NavSymbols = (props) => {
  const mappedKeys = props.currencyKeys.map((element, index) => {
    return <h6 key={index}>{element}</h6>;
  });

  return (
    <>
      <h1>SideNav</h1>
      <h1>{mappedKeys}</h1>
    </>
  );
};

export default NavSymbols;

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
//   }
