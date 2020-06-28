import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import CurrencyList from "./Components/CurrencyList";
import CurrencyHome from "./Components/CurrencyHome";
import About from "./Components/About";
import IndividualCurrency from "./Components/IndividualCurrency/IndividualCurrency";
import FormConverter from "./Components/FormConverter/FormConverter";
import SideNav from "./Components/SideNav/SideNav";
import RandomFile from "./Components/RandomFile";
import * as ReactBootStrap from "react-bootstrap";

function App() {
  const [currencyKeys, setCurrencyKeys] = useState([]);
  const [currency, getCurrency] = useState("");

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(`https://api.frankfurter.app/latest`);
      const data = await res.json();
      getCurrency(data.rates);
      const currencyKeyArray = Object.keys(data.rates).map((element, index) => {
        return element;
      });
      setCurrencyKeys(currencyKeyArray);
    };
    makeApiCall();
  }, []);

  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="/">
          Currency
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/about">
              About
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/currencies/">
              Currency
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/converter">
              Currency Converter
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/randomfile">
              RandomFile
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
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
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="#deets">
              More deets
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              Dank memes
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

      <main>
        <div className="main-section">
          <ReactBootStrap.Nav defaultActiveKey="/home" className="flex-column">
            <SideNav currencyKeys={currencyKeys} />
          </ReactBootStrap.Nav>
          <Switch>
            <Route exact path="/" component={CurrencyHome} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/currencies/"
              render={(routerProps) => <CurrencyList {...routerProps} />}
            />

            <Route
              exact
              path="/currencies/:symbol"
              render={(routerProps) => <IndividualCurrency {...routerProps} />}
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
              path="/randomfile"
              render={(routerProps) => (
                <RandomFile currencyKeys={currencyKeys} {...routerProps} />
              )}
            />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
