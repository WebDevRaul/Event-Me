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
      return { ...state, events: [...state.events.filter(evt => evt.id !== payload.id), payload] };
    case EVENTS.JOIN_EVENT:
      return { ...state, events: [ ...state.events.map(evt => {
        if(evt.id === payload.evt_id) evt.members = [...evt.members, payload.user]
        return evt;
      })] }
    default:
      return state;
  }
};

export default eventMe;