import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import CurrencyList from "./Components/CurrencyList";
import CurrencyHome from "./Components/CurrencyHome";
import About from "./Components/About";
import IndividualCurrency from "./Components/IndividualCurrency";
import FormConverter from "./Components/FormConverter";
import NavSymbols from "./Components/NavSymbols";

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
      <nav className="nav-box">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
        <Link to="/currencies/">
          <h1>Currencies</h1>
        </Link>
        <Link to="/converter">
          <h1>Currency Converter</h1>
        </Link>
        <Link to="/sidenav">
          <h1>SideNav</h1>
        </Link>
      </nav>

      <main>
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
            path="/sidenav"
            render={(routerProps) => (
              <NavSymbols currencyKeys={currencyKeys} {...routerProps} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
