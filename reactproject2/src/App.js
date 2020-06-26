import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import CurrencyList from "./Components/CurrencyList";
import CurrencyHome from "./Components/CurrencyHome";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <nav className="nav-box">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
        <Link to="/currencies">
          <h1>Currencies</h1>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={CurrencyHome} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            pather="/currencies"
            render={(routerProps) => <CurrencyList {...routerProps} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
