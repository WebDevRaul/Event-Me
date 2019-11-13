import { EVENTS } from '../actions/types';

const INITIAL_STATE = {
  events: [],
  error: {}
};

const eventMe = (state=INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case EVENTS.INITIAL_UPDATE:
      return { ...state, events: payload };
    case EVENTS.JOIN_EVENT:
    case EVENTS.LEAVE_EVENT:
      return { ...state, events: [...state.events.filter(i => i._id !== payload._id), payload] }
    case EVENTS.ERROR:
    case EVENTS.CLEAR_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default eventMe;