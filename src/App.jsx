import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(true);
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
  return (
    <>
      {/* <Modal {...{ showModal, setShowModal }} /> */}
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <AnimatePresence mode="wait">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/base"
              element={<Base addBase={addBase} pizza={pizza} />}
            />

            <Route
              path="/toppings"
              element={<Toppings addTopping={addTopping} pizza={pizza} />}
            />
            <Route
              path="/order"
              element={<Order pizza={pizza} setShowModal={setShowModal} />}
            />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
};

export default App;
