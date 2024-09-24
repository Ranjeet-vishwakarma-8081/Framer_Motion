// import React from "react";
import PropTypes from "prop-types";

const Order = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

// PropTypes validation
Order.propTypes = {
  pizza: PropTypes.shape({
    base: PropTypes.string.isRequired, // Ensure base is a required string
    toppings: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure toppings is an array of strings and required
  }).isRequired, // Ensure pizza object is required
};
export default Order;
