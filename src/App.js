import React from "react";
import "./App.css";
import PizzaListContainer from "./compomemts/PizzaListContainer";
import PizzaDetailsContainer from "./compomemts/PizzaDetailsContainer";
import AddPizzaFormContainer from "./compomemts/AddPizzaFormContainer";

function App() {
  return (
    <div className="App">
      <PizzaListContainer />
      <PizzaDetailsContainer />
      <AddPizzaFormContainer />
    </div>
  );
}

export default App;
