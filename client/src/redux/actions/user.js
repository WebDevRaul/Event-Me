import { USER } from './types';

export const register = data => {
  const { history, user } = data;
  history.push('/sign-in')
  return { type: USER.REGISTER, payload: user }
}

export const sign_in = data => {
  const { email } = data.user;
  return { type: USER.SIGN_IN, payload: { user: { email, name: 'Joana' }, isAuth: true } }
}

export const sign_out = () => {
  return { type: USER.SIGN_OUT }
}