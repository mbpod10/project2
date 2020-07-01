import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

import CurrencyHome from "./Components/Home/CurrencyHome";
import About from "./Components/About/About";
import IndividualCurrency from "./Components/IndividualCurrency/IndividualCurrency";
import FormConverter from "./Components/FormConverter/FormConverter";
import SideNav from "./Components/SideNav/SideNav";
import Names from "./Components/Names/Names";
import * as ReactBootStrap from "react-bootstrap";
import HistoricalPricing from "./Components/HistoricalPricing/HistoricalPricing";
import CurrencyFooter from "./Components/CurrencyFooter/CurrencyFooter";
function App() {
  const [currencyKeys, setCurrencyKeys] = useState([]);
  const [currency, getCurrency] = useState("");
  const [nameArray, getName] = useState([]);
  const [nameAndSymbolArray, getNameAndSymbolArray] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(`https://api.frankfurter.app/latest`);
      const data = await res.json();
      getCurrency(data.rates);
      const currencyKeyArray = Object.keys(data.rates).map((element, index) => {
        return element;
      });
      setCurrencyKeys(currencyKeyArray);
      const res2 = await fetch(`https://api.frankfurter.app/currencies`);
      const data2 = await res2.json();
      //console.log("data2", data2);
      const nameArray = Object.values(data2);
      getName(nameArray);
      const tempNameAndSymbolArray = Object.entries(data2);
      getNameAndSymbolArray(tempNameAndSymbolArray);
    };
    makeApiCall();
  }, []);

  //console.log(nameArray);
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="top"
      >
        <ReactBootStrap.Navbar.Brand href="/"></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/names">
              Names
            </Link>
            <Link className="nav-link" to="/converter">
              Currency Converter
            </Link>
            {/* <ReactBootStrap.Nav.Link href="/converter">
              Currency Converter
            </ReactBootStrap.Nav.Link> */}
            {/* <ReactBootStrap.NavDropdown
              title="Dropdown"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown> */}
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link className="nav-link" to="/historicalpricing">
              Euro Historical Data
            </Link>
            {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              Dank memes
            </ReactBootStrap.Nav.Link> */}
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

      <main>
        <div className="main-section">
          <ReactBootStrap.Nav defaultActiveKey="/home" className="flex-column">
            <SideNav currencyKeys={currencyKeys} />
          </ReactBootStrap.Nav>
          <Switch>
            {/* <Route exact path="/" component={CurrencyHome} /> */}
            <Route exact path="/" component={About} />
            <Route
              exact
              path="/currencies/:symbol"
              render={(routerProps) => (
                <IndividualCurrency nameArray={nameArray} {...routerProps} />
              )}
            />
            <Route
              exact
              path="/converter"
              render={(routerProps) => (
                <FormConverter currencyKeys={currencyKeys} {...routerProps} />
              )}
            />
            <Route
              exact
              path="/currencies/:symbol"
              render={(routerProps) => (
                <SideNav currencyKeys={currencyKeys} {...routerProps} />
              )}
            />
            <Route
              exact
              path="/names"
              render={(routerProps) => (
                <Names
                  currencyKeys={currencyKeys}
                  nameAndSymbolArray={nameAndSymbolArray}
                  {...routerProps}
                />
              )}
            />
            <Route
              exact
              path="/historicalpricing"
              render={(routerProps) => (
                <HistoricalPricing
                  currencyKeys={currencyKeys}
                  nameAndSymbolArray={nameAndSymbolArray}
                  {...routerProps}
                />
              )}
            />
          </Switch>
        </div>
      </main>
      <footer>
        <CurrencyFooter />
      </footer>
    </div>
  );
}

export default App;
