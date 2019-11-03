import { createSelector } from 'reselect';
import { privateEvents } from './utils/events';

const select_state = state => state;
const select_eventMe_state = state => state.eventMe;
const select_events_state = state => state.eventMe.events;

export const state_events = createSelector(
  [select_events_state],
  state => state
);

export const state_private_events = createSelector(
  [select_state],
  state => privateEvents(state)
  )

export const state_event_error = createSelector(
  [select_eventMe_state],
  state => state.error
);