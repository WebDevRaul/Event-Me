import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { USER } from './types';
import jwt_decode from 'jwt-decode';
import URL from './URL';

export const register = ({ user, history }) => dispatch => {
  dispatch({ type: USER.LOADING });
  axios.post(`${URL.user}/register`, user)
    .then(res => {
      dispatch({ type: USER.REGISTER, payload: res.data });
      dispatch({ type: USER.LOADED });
      history.push('/sign-in');
      toastr.success('Success!', 'Registered successfully');
    })
    .catch(err => {
      dispatch({ type: USER.ERROR, payload: err.response.data })
      dispatch({ type: USER.LOADED });
    });
}

export const sign_in = obj => dispatch => {
  dispatch({ type: USER.LOADING });
  axios.post(`${URL.user}/sign-in`, obj)
    .then(({ data: { token } }) => {
      // Save to LocalStorage
      localStorage.setItem('jwToken', token);
      // Set Auth Token
      setAuthToken(token);
      // Set User
      dispatch(setCurrentUser(token));
      dispatch({ type: USER.LOADED });
      toastr.success('Success!', 'Signed In successfully');
    })
    .catch(err => {
      dispatch({ type: USER.ERROR, payload: err.response.data })
      dispatch({ type: USER.LOADED });
    })
}

export const sign_out = () => dispatch => {
  // Remove token from localstorage
  localStorage.removeItem('jwToken');
  // Remove Auth Token
  setAuthToken(false);
  // Clear user (Redux)
  dispatch(setRemoveUser());
  toastr.success('Success!', 'Signed Out successfully');
};

export const setAuthToken = token => {
  if (!token) return delete axios.defaults.headers.common['Authorization'];
  axios.defaults.headers.common['Authorization'] = token;
};

export const setCurrentUser = token => {
  return { type: USER.SIGN_IN, payload: jwt_decode(token) };
};

export const setRemoveUser = () => {
  return { type: USER.SIGN_OUT }
};

export const clearUserErrors = () => {
  return { type: USER.CLEAR_ERROR, payload: {} }
}