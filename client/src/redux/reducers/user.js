import { USER } from '../actions/types';

const INITIAL_STATE = {
  info: {},
  isAuth: false
}

const user = (state=INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case USER.SIGN_IN:
      return {...state, info: payload.user, isAuth: payload.isAuth}
    default:
      return state;
  }
};

export default user;