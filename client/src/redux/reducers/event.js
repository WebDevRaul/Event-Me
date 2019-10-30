import { EVENTS } from '../actions/types';

const INITIAL_STATE = {
  events: [],
  selectedEvent: {}
};

const eventMe = (state=INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case EVENTS.UPDATE_EVENT:
      return { ...state, events: payload }
    case EVENTS.SELECT_EVENT:
      return { ...state, selectedEvent: {...state.events.filter(({ id }) => id === payload)[0]} }
    default:
      return state;
  }
};

export default eventMe;