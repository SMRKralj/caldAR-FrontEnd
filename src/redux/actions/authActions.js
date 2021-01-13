import {
  LOGIN_FETCHING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  SET_AUTHENTICATION,
  LOGOUT_FETCHING,
  LOGOUT_FULFILLED,
  LOGOUT_REJECTED,
} from "../types/actionsTypes";

import { requestPost } from "../../utils/request";

const URL = "http://localhost:3001/auth";

const loginFetching = () => {
  return {
    type: LOGIN_FETCHING,
  };
};

const loginFulfilled = () => {
  return {
    type: LOGIN_FULFILLED,
  };
};

const loginRejected = () => {
  return {
    type: LOGIN_REJECTED,
  };
};

export const login = (credentials) => (dispatch) => {
  dispatch(loginFetching());
  return requestPost(`${URL}/login`, { data: credentials })
    .then((response) => {
      localStorage.setItem("token", response.token);
      return dispatch(loginFulfilled());
    })
    .catch(() => {
      return dispatch(loginRejected());
    });
};

export const setAuthentication = () => {
  return {
    type: SET_AUTHENTICATION,
  };
};

const logoutFetching = () => {
  return {
    type: LOGOUT_FETCHING,
  };
};

const logoutFulfilled = () => {
  return {
    type: LOGOUT_FULFILLED,
  };
};

const logoutRejected = () => {
  return {
    type: LOGOUT_REJECTED,
  };
};

export const logout = () => (dispatch) => {
  dispatch(logoutFetching());
  return requestPost(`${URL}/logout`)
    .then((response) => {
      localStorage.removeItem("token");
      return dispatch(logoutFulfilled());
    })
    .catch(() => {
      return dispatch(logoutRejected());
    });
};
