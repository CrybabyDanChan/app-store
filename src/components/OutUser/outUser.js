import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./outUser.sass";
import compose from "../../compose";

import Button from "../Button";
import * as actionsAthenticated from "../../actions/authenticatedActions";

const OutUser = (props) => {
  const { outLog, history } = props;
  const outLogin = (event) => {
    localStorage.removeItem("token");
    outLog();
    // history.push("/");
  };
  return (
    <div className="outUser">
      <Button text={"out"} additionalClass={"btn_center"} actionMethod={outLogin}/>
    </div>
  );
};

export default compose(
  connect(undefined, actionsAthenticated),
  withRouter
)(OutUser);
