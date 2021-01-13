import React from "react";
import styles from "./navBar.module.css";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout as logoutAction } from "../../redux/actions/authActions";
import { LOGOUT_FULFILLED } from "../../redux/types/actionTypes";

const NavBar = ({ logout, history }) => {
  const onLogoutClick = () => {
    logout().then((action) => {
      if (action.type === LOGOUT_FULFILLED) {
        history.push("/");
      }
    });
  };

  return (
    <div className={styles.navBarContainer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Boilers</li>
        <li>Technicians</li>
        <li>
          <Link style={linkStyle} to="/buildings">
            Buildings
          </Link>
        </li>
        <li>Maintenance services</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
      <button onClick={() => onLogoutClick}>Logout</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logout: logoutAction,
    },
    dispatch
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
