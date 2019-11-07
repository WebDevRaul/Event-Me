import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { USER } from './types';
import jwt_decode from 'jwt-decode';
import URL from './URL';

// Async/await
// export const register = ({ user, history }) => {
//   return async dispatch => {
//     const onSuccess = data => {
//       dispatch({ type: USER.REGISTER, payload: data })
//       history.push('/sign-in')
//     };
//     const onError = err => {
//       dispatch({ type: USER.ERROR, payload: err })
//     };
//     try {
//       const res = await axios.post(`${URL.user}/register`, user);
//       return onSuccess(res.data);
//     } catch (err) {
//       return onError(err)
//     }
//   }
// }

export const register = ({ user, history }) => dispatch => {
  axios.post(`${URL.user}/register`, user)
    .then(res => {
      dispatch({ type: USER.REGISTER, payload: res.data });
      history.push('/sign-in');
      toastr.success('Success!', 'Registered successfully');
    })
    .catch(err => dispatch({ type: USER.ERROR, payload: err.response.data }))
}

export const sign_in = obj => dispatch => {
  axios.post(`${URL.user}/sign-in`, obj)
    .then(({ data: { token } }) => {
      // Save to LocalStorage
      localStorage.setItem('jwToken', token);
      // Set Auth Token
      setAuthToken(token);
      // Set User
      dispatch(setCurrentUser(token));
      toastr.success('Success!', 'Signed In successfully');
    })
    .catch(err => dispatch({ type: USER.ERROR, payload: err.response.data }))
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