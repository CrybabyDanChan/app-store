import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import compose from "../../compose";

import * as actionsAthenticated from "../../actions/authenticatedActions";
import "./logotype.sass";
import AuthBlock from "../AuthBlock";
import UserBlock from "../UserBlock";
import OutBlock from "../OutBlock";

const Logotype = ({ auth, outLog, history }) => {
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (!auth) {
      history.push("/home/log-in");
    }
  }, [auth]);

  const outLogin = () => {
    localStorage.removeItem("token");
    outLog();
    setOut(false);
  };

  const viewOut = out ? <OutBlock method={outLogin}/> : null;

  const viewBlock = auth
    ? <UserBlock method={() => setOut(state => !state)}/>
    : <AuthBlock type="logotype"/>;

  return (
    <div className="logotype">
      <div className="container">
        <div className="logotype-content">
          <Link to="/" className="logotype-content__title">Logotype</Link>
          <div className="logotype-content__wrapper">
            <Link to="/products" className="logotype-content__products">Products</Link>
            { viewBlock }
          </div>
          {viewOut}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.authenticated;
};

Logotype.propTypes = {
  auth: PropTypes.bool,
  outLog: PropTypes.func,
  history: PropTypes.any
};

export default compose(
  connect(mapStateToProps, actionsAthenticated, undefined, { pure: false }),
  withRouter
)(Logotype);
