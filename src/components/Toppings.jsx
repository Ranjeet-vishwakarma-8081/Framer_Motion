// import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>
    </div>
  );
};

// PropTypes validation
Toppings.propTypes = {
  pizza: PropTypes.shape({
    base: PropTypes.string, // Ensuring pizza object has a 'base' string property
    toppings: PropTypes.arrayOf(PropTypes.string), // 'toppings' is an array of strings
  }).isRequired,
  addTopping: PropTypes.func, // Ensuring addBase is a function and required
};

export default Toppings;
