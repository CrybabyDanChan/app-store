import React from "react";
import PropTypes from "prop-types";

import "./counter.sass";

const Counter = (props) => {
  const { actionMethod, count } = props;

  const handleIncClick = () => {
    actionMethod(count + 1);
  };

  const handleDecClick = () => {
    if (count >= 2) {
      actionMethod(count - 1);
    }
  };

  const handleInput = (event) => {
    actionMethod(event.target.value);
  };

  return (
    <div className="counter">
      <button className="counter__dec"
        onClick={handleDecClick}>
        <span></span>
      </button>
      <input className="counter__result" value={count} onChange={handleInput}/>
      <button className="counter__inc"
        onClick={handleIncClick}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

Counter.propTypes = {
  actionMethod: PropTypes.func,
  count: PropTypes.number
};

export default Counter;
