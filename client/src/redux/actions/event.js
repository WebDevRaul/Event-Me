import { EVENTS } from './types';
import axios from 'axios';
import URL from './URL';

export const update_events = () => dispatch => {
  axios.get(`${URL.event}/home`)
    .then(({ data }) => dispatch({ type: EVENTS.INITIAL_UPDATE, payload: data }))
    .catch(err => dispatch({ type: EVENTS.ERROR, payload: err }));
}

export const create_event = ({ event, history }) => dispatch => {
  axios.post(`${URL.event}/create-event`, event)
    .then(({ data }) => {
      dispatch({ type: EVENTS.CREATE_EVENT, payload: data });
      history.push('/home');
    })
    .catch(err => dispatch({ type: EVENTS.ERROR, payload: err.response.data }));
}

export const select_event = id => {
  return { type: EVENTS.SELECT_EVENT, payload: id }
}

export const join_event = data => {
  return { type: EVENTS.JOIN_EVENT, payload: data }
}

export const clearEventErrors = () => {
  return { type: EVENTS.CLEAR_ERROR, payload: {} }
}