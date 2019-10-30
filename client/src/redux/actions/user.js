import { USER } from './types';

export const register = data => {
  const { history, user } = data;
  history.push('/sign-in')
  return { type: USER.REGISTER, payload: user }
}

export const sign_in = data => {
  return { type: USER.SIGN_IN, payload: data }
}

export const sign_out = () => {
  return { type: USER.SIGN_OUT }
}