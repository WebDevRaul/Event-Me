import axios from 'axios';
import URL from './URL';
import { PROFILE } from './types';
import { toastr } from 'react-redux-toastr';
import { setAuthToken } from './user';

export const update_basic = obj => dispatch => {
  axios.post(`${URL.profile}/basic`, obj)
    .then(({ data: { user, token } }) => {
      dispatch({ type: PROFILE.BASIC, payload: user });
      // remove old Token
      localStorage.removeItem('jwToken');
      // Set new Token
      localStorage.setItem('jwToken', token);
      // Set Auth Token
      setAuthToken(token);
      toastr.success('Success!', 'Profile updated');
    })
    .catch(err => {
      dispatch({ type: PROFILE.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    });
};

export const update_about = obj => dispatch => {
  axios.post(`${URL.profile}/about`, obj)
    .then(({ data: { user, token } }) => {
      dispatch({ type: PROFILE.ABOUT, payload: user });
      // remove old Token
      localStorage.removeItem('jwToken');
      // Set new Token
      localStorage.setItem('jwToken', token);
      // Set Auth Token
      setAuthToken(token);
      toastr.success('Success!', 'Profile updated');
    })
    .catch(err => {
      dispatch({ type: PROFILE.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    });
}

export const upload_photo = ({ image, main }) => dispatch => {
  var form = new FormData();
  form.append('file', image);
  form.append('main', main);

  axios.post(`${URL.profile}/photo`, form)
    .then(({ data: { user, token } }) => {
      dispatch({ type: PROFILE.PHOTO, payload: user });
      // remove old Token
      localStorage.removeItem('jwToken');
      // Set new Token
      localStorage.setItem('jwToken', token);
      // Set Auth Token
      setAuthToken(token);
      toastr.success('Success!', 'Profile updated');
    })
    .catch(err => {
      dispatch({ type: PROFILE.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    });
}

export const set_main = obj => dispatch => {

  axios.post(`${URL.profile}/photo/set`, obj)
    .then(({ data: { user, token } }) => {
      dispatch({ type: PROFILE.SET_PHOTO, payload: user });
      // remove old Token
      localStorage.removeItem('jwToken');
      // Set new Token
      localStorage.setItem('jwToken', token);
      // Set Auth Token
      setAuthToken(token);
      toastr.success('Success!', 'Profile updated');
    })
    .catch(err => {
      dispatch({ type: PROFILE.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    });
}