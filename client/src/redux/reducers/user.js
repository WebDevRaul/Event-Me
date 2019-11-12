import { USER, PROFILE } from '../actions/types';

const INITIAL_STATE = {
  info: {
    profile: {
      image: []
    }
  },
  isAuth: false,
  error: {}
}

const user = (state=INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case USER.SIGN_IN:
      return {...state, info: payload.user, isAuth: payload.isAuth};
    case USER.SIGN_OUT:
      return { ...state, info: {profile:{image:[]}}, isAuth: false };
    case PROFILE.BASIC:
    case PROFILE.ABOUT:
    case PROFILE.PHOTO:
    case PROFILE.SET_PHOTO:
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