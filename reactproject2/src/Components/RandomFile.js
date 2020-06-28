import React, { useEffect, useState } from "react";

const RandomFile = (props) => {
  const [nameAndSymbol, getNameAndSymbol] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(`https://api.frankfurter.app/currencies`);
      const data = await res.json();
      console.log("data", data);

      //for (const key in data) {
      //const newArray = [];
      //console.log(`${key}: ${data[key]}`);
      // const newArray = [];
      // newArray.push(`${key}: ${data[key]}`);
      //getNameAndSymbol([`${key}: ${data[key]}`, ...nameAndSymbol]);
      // getNameAndSymbol([...newArray]);
      //}
      Object.keys(data).map((key, index) => {
        const nameArray = getNameAndSymbol(data[key]);
        //getNameAndSymbol(nameArray);
        //return nameArray;
      });
    };
    makeApiCall();
    //getName();
  }, []);

  // const getName = () => {
  //   Object.keys(nameData).map((key, index) => {
  //     const nameArray = nameData[key];
  //     getNameAndSymbol(nameArray);
  //     return nameArray;
  //   });
  // };

  console.log("Name and SymbolArray ", nameAndSymbol);
  //console.log(newArray);

  return (
    <>
      <h1>RandomFile</h1>
      <h1>{nameAndSymbol}</h1>
    </>
  );
};

export default RandomFile;
