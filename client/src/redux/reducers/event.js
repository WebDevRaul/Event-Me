import { EVENTS } from '../actions/types';
import data from '../data/TempData';

const INITIAL_STATE = {
  events: [...data],
  selectedEvent: {}
};

const eventMe = (state=INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case EVENTS.UPDATE_EVENT:
      return { ...state, events: payload };
    case EVENTS.SELECT_EVENT:
      return { ...state, selectedEvent: {...state.events.filter(({ id }) => id === payload)[0]} };
    case EVENTS.CREATE_EVENT:
      return { ...state, events: [...state.events, payload] };
    case EVENTS.JOIN_EVENT:
      return { 
        ...state, 
        selectedEvent: { ...state.selectedEvent, members: [...state.selectedEvent.members, payload.user] },
        // Temporary
        events: [...state.events.filter(i => i.id !== payload.event_id ), {...state.selectedEvent, members: [...state.selectedEvent.members, payload.user]}]
      }
    default:
      return state;
  }
};

export default eventMe;