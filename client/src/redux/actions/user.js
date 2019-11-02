import { USER } from './types';
import axios from 'axios';
import URL from '../../utils/URL';

export const register = ({ user, history }) => dispatch => {
  axios.post(`${URL.user}/register`, user)
    .then(res => {
      dispatch({ type: USER.REGISTER, payload: res.data })
      history.push('/sign-in')
    })
    .catch(err => dispatch({ type: USER.ERROR, payload: err }))
}

export const sign_in = data => {
  const { email } = data.user;
  return { type: USER.SIGN_IN, payload: { user: { email, name: 'Joana', id: '5a' }, isAuth: true } }
}

export const sign_out = () => {
  return { type: USER.SIGN_OUT }
}