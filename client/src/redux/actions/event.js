import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { EVENTS } from './types';
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
      toastr.success('Success!', 'Your event has been created');
    })
    .catch(err => {
      dispatch({ type: EVENTS.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    });
}

export const join_event = obj => dispatch => {
  axios.post(`${URL.event}/join-event`, obj)
    .then(({ data }) => {
      dispatch({ type: EVENTS.JOIN_EVENT, payload: data });
      toastr.success('Success!', 'You have joined the event');
    })
    .catch(err => {
      dispatch({ type: EVENTS.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    })
}

export const leave_event = obj => dispatch => {
  axios.post(`${URL.event}/leave-event`, obj)
    .then(({ data }) => {
      dispatch({ type: EVENTS.LEAVE_EVENT, payload: data });
      toastr.success('Success!', 'You have left the event');
    })
    .catch(err => {
      dispatch({ type: EVENTS.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    })
}

export const update_event = ({ event, history }) => dispatch => {
  axios.post(`${URL.event}/home/:id/manage-event/update`, event)
    .then(({ data }) => {
      dispatch({ type: EVENTS.UPDATE_EVENT, payload: data });
      history.push('/home');
      toastr.success('Success!', 'You have updated the event');
    })
    .catch(err => {
      dispatch({ type: EVENTS.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    })
}

export const delete_event = ({ _id, history }) => dispatch => {
  axios.post(`${URL.event}/home/:id/manage-event`, {_id})
    .then(evt => {
      dispatch({ type: EVENTS.DELETE_EVENT, payload: evt });
      history.push('/home');
      toastr.success('Success', 'You have deleted your event');
    })
    .catch(err => {
      dispatch({ type: EVENTS.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    })
}


export const clearEventErrors = () => {
  return { type: EVENTS.CLEAR_ERROR, payload: {} }
}