import { USER } from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import URL from '../../utils/URL';

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
      dispatch({ type: USER.REGISTER, payload: res.data })
      history.push('/sign-in')
    })
    .catch(err => dispatch({ type: USER.ERROR, payload: err }))
}

export const sign_in = data => dispatch => {
  axios.post(`${URL.user}/sign-in`, data)
    .then(({ data }) => {
      const { token, isAuth } = data;
      // Save to LocalStorage
      localStorage.setItem('jwToken', token);
      // Set Auth Token
      setAuthToken(token);
      // Set User
      dispatch({ type: USER.SIGN_IN, payload: { user: jwt_decode(token), isAuth } })
    })
    .catch(err => dispatch({ type: USER.ERROR, payload: err }))
}

export const sign_out = () => dispatch => {
  // Remove token from localstorage
  localStorage.removeItem('jwtToken');
  // Remove Auth Token
  setAuthToken(false);
  // Clear user (Redux)
  dispatch({ type: USER.SIGN_OUT });
}

const setAuthToken = token => {
  if (!token) return delete axios.defaults.headers.common['Authorization'];
    axios.defaults.headers.common['Authorization'] = token;
};