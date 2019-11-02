import { EVENTS } from './types';
import axios from 'axios';
import URL from './URL';

export const create_event = ({ event, history }) => dispatch => {
  axios.post(`${URL.event}/create-event`, event)
    .then(({ data }) => {
      dispatch({ type: EVENTS.CREATE_EVENT, payload: data });
      history.push('/home');
    })
    .catch(err => console.log(err));
}

export const select_event = id => {
  return { type: EVENTS.SELECT_EVENT, payload: id }
}

export const join_event = data => {
  return { type: EVENTS.JOIN_EVENT, payload: data }
}

export const update_events = events => {
  return { type: EVENTS.UPDATE_EVENT, payload: events }
}
