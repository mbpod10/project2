import React, { useEffect, useState } from "react";

const RandomFile = (props) => {
  const [nameAndSymbolArray, getNameAndSymbol] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(`https://api.frankfurter.app/currencies`);
      const data = await res.json();
      console.log("data", data);
      const nameArray = Object.values(data);
      getNameAndSymbol(nameArray);
    };
    makeApiCall();
  }, []);

  const nameAndSymbol = nameAndSymbolArray.map((element, index) => {
    return <h3 key={index}>{element}</h3>;
  });

  console.log("Name and SymbolArray ", nameAndSymbol);
  return (
    <div>
      <h1>RandomFile</h1>
      <h1>{nameAndSymbol}</h1>
    </div>
  );
};

export default RandomFile;
