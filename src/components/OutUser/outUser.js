import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./outUser.sass";
import compose from "../../compose";
import Button from "../Button";
import * as actionsAthenticated from "../../actions/authenticatedActions";

const OutUser = (props) => {
  const { outLog, history, auth } = props;

  useEffect(() => {
    if (!auth) {
      history.push("/home/log-in");
    }
  });

  const outLogin = (event) => {
    localStorage.removeItem("token");
    outLog();
  };
  return (
    <div className="outUser">
      <Button text={"out"} additionalClass={"btn_center"} actionMethod={outLogin}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.authenticated;
};

OutUser.propTypes = {
  outLog: PropTypes.func,
  history: PropTypes.any,
  auth: PropTypes.bool
};

export default compose(
  connect(mapStateToProps, actionsAthenticated),
  withRouter
)(OutUser);
