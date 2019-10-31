import { EVENTS } from '../actions/types';
import data from '../data/TempData';

const INITIAL_STATE = {
  events: [...data]
};

const eventMe = (state=INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case EVENTS.UPDATE_EVENT:
      return { ...state, events: payload };
    case EVENTS.CREATE_EVENT:
      return { ...state, events: [...state.events, payload] };
    case EVENTS.JOIN_EVENT:
      return { ...state, events: [ ...state.events.filter(i => i.id !== payload.id), payload] }
    default:
      return state;
  }
};

export default eventMe;