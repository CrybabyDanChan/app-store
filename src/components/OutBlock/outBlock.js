import React from "react";
import PropTypes from "prop-types";

import "./outBlock.sass";

const OutBlock = (props) => {
  const { actionMethod } = props;
  return (
    <div className="out-block" onClick={actionMethod}>
      <div className="out-block__wrapper">
        <span></span>
        Log Out
      </div>
    </div>
  );
};

OutBlock.propTypes = {
  actionMethod: PropTypes.func
};

export default OutBlock;
