import { createSelector } from 'reselect';

const select_event_state = state => state.event;

export const state_event = createSelector(
  [select_event_state],
  state => state
);