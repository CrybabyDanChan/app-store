import React from "react";
import PropTypes from "prop-types";

import "./outBlock.sass";

const OutBlock = (props) => {
  const { method } = props;
  return (
    <div className="out-block" onClick={method}>
      <span></span>
    Log Out
    </div>
  );
};

OutBlock.propTypes = {
  method: PropTypes.func
};

export default OutBlock;
