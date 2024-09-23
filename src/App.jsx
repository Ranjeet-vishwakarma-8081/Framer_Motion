import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Base from "./components/Base";
import Home from "./components/Home";
import Order from "./components/Order";
const App = () => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({
      ...pizza,
      base,
    });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping))
      newToppings = [...pizza.toppings, topping];
    else newToppings = pizza.toppings.filter((item) => item !== topping);
    setPizza({
      ...pizza,
      toppings: newToppings,
    });
  };
  return;
  <>
    <Header />

    <Switch>
      <Route path="/">
        <Home />
      </Route>

      <Route path="/base">
        <Base addBase={addBase} pizza={pizza} />
      </Route>

      <Route path="/base">
        <Base addBase={addTopping} pizza={pizza} />
      </Route>

      <Route path="/order">
        <Order pizza={pizza} />
      </Route>
    </Switch>
  </>;
};

export default App;
