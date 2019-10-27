import { EVENTS } from './types';

export const update_events = events => {
  return { type: EVENTS.UPDATE_EVENT, payload: events }
}