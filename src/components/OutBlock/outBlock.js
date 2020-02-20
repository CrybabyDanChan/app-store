import React from "react";
import PropTypes from "prop-types";

import "./outBlock.sass";

const OutBlock = (props) => {
  const { method } = props;
  return (
    <div className="out-block" onClick={method}>
      <div className="out-block__wrapper">
        <span></span>
        Log Out
      </div>
    </div>
  );
};

OutBlock.propTypes = {
  method: PropTypes.func
};

export default OutBlock;
