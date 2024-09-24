// import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      stiffness: 120,
      when: "beforeChildren",
      staggerChildren: 2, 
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
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
