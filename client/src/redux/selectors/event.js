import { createSelector } from 'reselect';

const select_events_state = state => state.eventMe.events;
const select_selectedEvent_state = state => state.eventMe.selectedEvent;

export const state_events = createSelector(
  [select_events_state],
  state => state
);

export const state_selectedEvent = createSelector(
  [select_selectedEvent_state],
  state => state[0]
);