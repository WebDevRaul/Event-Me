import { EVENTS } from '../actions/types';

const INITIAL_STATE = {
  events: [],
  error: {}
};

const eventMe = (state=INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case EVENTS.UPDATE_EVENT:
      return { ...state, events: payload };
    case EVENTS.CREATE_EVENT:
      return { ...state, events: [...state.events, payload] };
    case EVENTS.JOIN_EVENT:
      return { ...state, events: [...state.events.map(evt => evt.id === payload.evt_id ? { ...evt, members: [...evt.members, payload.user] } : evt)] };
      case EVENTS.ERROR:
        return { ...state, error: payload }
    default:
      return state;
  }
};

export default eventMe;