import React, { useState } from "react";

import "./counter.sass";

const Counter = (props) => {
  const { methods } = props;

  const [{ count }, setCount] = useState({ count: 1 });

  const handleIncClick = (event) => {
    event.preventDefault();
    setCount(state => {
      let newCount = state.count;
      newCount++;
      return {
        ...state,
        count: newCount
      };
    });
  };

  const handleDecClick = (event) => {
    event.preventDefault();
    setCount(state => {
      let newCount = state.count;
      if (state.count >= 2) {
        newCount--;
      }
      return {
        ...state,
        count: newCount
      };
    });
  };

  return (
    <div className="counter">
      <button className="counter__dec"
        onClick={handleDecClick}>
        <span></span>
      </button>
      <div className="counter__result">{count}</div>
      <button className="counter__inc"
        onClick={handleIncClick}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

Counter.defaultProps = {
  methods: false
};

export default Counter;
