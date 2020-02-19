import React from "react";
import PropTypes from "prop-types";

import "./counter.sass";

const Counter = (props) => {
  const { method, count } = props;

  const handleIncClick = (event) => {
    event.preventDefault();
    method(count + 1);
  };

  const handleDecClick = (event) => {
    event.preventDefault();
    if (count >= 2) { method(count - 1); }
  };

  return (
    <div className="counter">
      <button className="counter__dec"
        onClick={handleDecClick}>
        <span></span>
      </button>
      <input className="counter__result" value={count} onChange={() => method(event.target.value)}/>
      <button className="counter__inc"
        onClick={handleIncClick}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

Counter.propTypes = {
  method: PropTypes.func,
  count: PropTypes.number
};

export default Counter;
