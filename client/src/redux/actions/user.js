import { USER } from './types';

export const sign_in = data => {
  return { type: USER.SIGN_IN, payload: data }
}