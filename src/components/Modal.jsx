// import React from "react";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

// const modal = {
//   hidden: {
//     y: "-100vh",
//     opacity: 0,
//   },
//   visible: {
//     y: "200px",
//     opacity: 1,
//     transition: { delay: 0.5 },
//   },
// };
// FIXME: this is not working
// TODO: this should be fixed
const Modal = ({ showModel, setShowModel }) => {
  console.log(showModel, setShowModel);
  return (
    <AnimatePresence mode="wait" onExitComplete={() => setShowModel(false)}>
      {showModel && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial={"hidden"}
          animate={"visible"}
          exit={"hidden"}
        >
          {/* <motion.div className="modal" variants={"model"}>
              <p>Want to make another pizza?</p>
              <Link to="/">
                <button>Start Again</button>
              </Link>
            </motion.div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  showModel: PropTypes.bool.isRequired,
  setShowModel: PropTypes.func.isRequired,
};

export default Modal;
