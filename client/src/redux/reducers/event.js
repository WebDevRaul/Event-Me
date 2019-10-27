import { EVENTS } from '../actions/types';

const initialState = {
  events: {}
};

const event = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case EVENTS.UPDATE_EVENT:
      return { ...state, events: payload }
    default:
      return state;
  }
};

export default event;