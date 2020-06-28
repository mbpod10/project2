import React, { useEffect, useState } from "react";

const RandomFile = (props) => {
  const [nameAndSymbol, getNameAndSymbol] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(`https://api.frankfurter.app/currencies`);
      const data = await res.json();
      console.log("data", data);
      Object.keys(data).map((key, index) => {
        const nameArray = data[key];
        getNameAndSymbol(nameArray);
        return nameArray;
      });
    };
    makeApiCall();
  }, []);

  console.log("Name and SymbolArray ", nameAndSymbol);

  return (
    <>
      <h1>RandomFile</h1>
      <h1>{nameAndSymbol}</h1>
    </>
  );
};

export default RandomFile;
