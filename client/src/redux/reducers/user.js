import { USER, PROFILE } from '../actions/types';

const INITIAL_STATE = {
  info: {},
  isAuth: false,
  registered: false,
  error: {}
}

const user = (state=INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case USER.REGISTER:
      return { ...state, registered: payload.success };
    case USER.SIGN_IN:
      return {...state, info: payload.user, isAuth: payload.isAuth};
    case USER.SIGN_OUT:
      return { ...state, info: {}, isAuth: false };
    case PROFILE.BASIC:
      return { ...state, info: payload }
    case USER.ERROR:
    case PROFILE.ERROR:
    case USER.CLEAR_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default user;