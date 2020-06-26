import React from "react";
import "./App.css";
import CurrencyList from "./Components/CurrencyList";
import CurrencyHome from "./Components/CurrencyHome";

function App() {
  return (
    <div className="App">
      <CurrencyHome />
      <CurrencyList />
    </div>
  );
}

export default App;
