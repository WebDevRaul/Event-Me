import axios from 'axios';
import URL from './URL';
import { PROFILE } from './types';
import { toastr } from 'react-redux-toastr';

export const update_basic = obj => dispatch => {
  axios.post(`${URL.profile}/basic`, obj)
    .then(({ data }) => {
      dispatch({ type: PROFILE.BASIC, payload: data });
      toastr.success('Success!', 'Profile updated');
    })
    .catch(err => {
      dispatch({ type: PROFILE.ERROR, payload: err.response.data });
      toastr.error('Oops!', 'Something went wrong');
    });
};