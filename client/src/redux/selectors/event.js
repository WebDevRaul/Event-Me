import { createSelector } from 'reselect';

const select_events_state = state => state.eventMe.events;

export const state_events = createSelector(
  [select_events_state],
  state => state
);