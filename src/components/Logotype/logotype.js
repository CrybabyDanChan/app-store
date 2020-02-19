import React, { useEffect, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actionsAthenticated from "../../actions/authenticatedActions";
import "./logotype.sass";
import personal from "../../images/personal.jpg";
import cart from "../../images/cart.jpg";
import compose from "../../compose";

const Logotype = ({ auth, outLog, history }) => {
  useEffect(() => {
    if (!auth) {
      history.push("/home/log-in");
    }
  }, [auth]);

  const [out, setOut] = useState(false);

  const authBlock = <div className="logotype-content__auth">
    <NavLink to="/home/log-in" className="logotype-content__logIn" activeClassName="is-active">
      Log In
    </NavLink>
    <span className="line"></span>
    <NavLink to="/home/sign-in" className="logotype-content__signIn" activeClassName="is-active">
      Sign In
    </NavLink>
  </div>;

  const userBlock = <div className="logotype-content__user">
    <div className="logotype-content__personal"
      onClick={() => setOut(state => !state)}
    >
      <img src={personal} alt="personal"/>
    </div>
    <Link to="/cart" className="logotype-content__cart">
      <img src={cart} alt="cart"></img>
    </Link>
  </div>;

  const outLogin = (event) => {
    localStorage.removeItem("token");
    outLog();
    setOut(false);
  };

  const viewOut = out ? <div className="logotype-content__log-out" onClick={outLogin}>
    <span></span>
    Log Out
  </div> : null;

  const ViewBlock = auth ? userBlock : authBlock;
  return (
    <div className="logotype">
      <div className="container">
        <div className="logotype-content">
          <Link to="/" className="logotype-content__title">Logotype</Link>
          <div className="logotype-content__wrapper">
            <Link to="/products" className="logotype-content__products">Products</Link>
            { ViewBlock }
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
