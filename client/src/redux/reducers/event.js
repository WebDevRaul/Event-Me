import { EVENTS } from '../actions/types';

const initialState = {
  events: [],
  selectedEvent: {}
};

const eventMe = (state=initialState, action) => {
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