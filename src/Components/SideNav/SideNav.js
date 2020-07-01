import React, { useEffect, useState } from "react";
import "./SideNav.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNav = (props) => {
  const mappedKeys = props.currencyKeys.map((element, index) => {
    return (
      <Link className="nav-link" to={`/currencies/${element}`}>
        <h6 className="symbol" key={index}>
          {element}
        </h6>
      </Link>
    );
  });

  return (
    <>
      <h3 className="nav-h3">Quick Nav</h3>
      <h1 className="currencyNamesSymb">{mappedKeys}</h1>
    </>
  );
};

export default SideNav;

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
//   }

// import React, { useEffect, useState } from "react";
// import "./SideNav.css";
// import * as ReactBootStrap from "react-bootstrap";

// const SideNav = (props) => {
//   const mappedKeys = props.currencyKeys.map((element, index) => {
//     return (
//       <h6 className="symbol" key={index}>
//         {element}
//       </h6>
//     );
//   });

//   return (
//     <>
//       <div className="left-screen">
//         <h1 className="currencySymbols">{mappedKeys}</h1>
//       </div>
//     </>
//   );
// };

// export default SideNav;