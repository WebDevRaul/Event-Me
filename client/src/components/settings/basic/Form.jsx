import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update_basic } from '../../../redux/actions/profile';
import { clearUserErrors } from '../../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_user, state_user_error } from '../../../redux/selectors/user';
import validateBasic from '../utils/ValidateBasic';
import { addYears } from 'date-fns/esm';

import ButtonOne from '../../common/buttonOne/ButtonOne';
import Input from '../../common/Form/input/Input';
import DateInput from '../../common/Form/date/DateInput';
import Gender from '../../common/Form/radio/Gender';

const Form = ({ update_basic, user, errors, clearUserErrors }) => {
  const [state, setState] = useState({ first_name: '', last_name: '', gender: '', birthday: '', town: '' });
  const [error, setErrors] = useState({ first_name: '', last_name: '', birthday: '', town: ''});
  const { first_name, last_name, birthday, town } = state;

  // Update fields CDM
  useEffect(() => { 
    const { first_name, last_name, profile : { birthday, town } } = user;
    if(!!!birthday || !!!town) return setState({ ...state, first_name, last_name });
     setState({ first_name, last_name, birthday, town });
    // eslint-disable-next-line
   },[])
  // Update Errors CDU
  useEffect(() => { setErrors(errors) },[errors]);
  // Clear Errors CDUM
  useEffect(() => { 
    const clear = () => clearUserErrors();
    return clear;
    // eslint-disable-next-line
  },[])

  const onChange = e => setState({...state, [e.target.name]: e.target.value });
  const onChangeDate = e => setState({ ...state, birthday: String(e) });
  const onFocus = e => {
    if(first_name || last_name || birthday || town !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: '' });
    }
  }
  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateBasic(state);
    if(!isValid) { setErrors({...error, ...errors})}
    else { update_basic({ ...state })};
  }

  return (
    <form noValidate onSubmit={onSubmit}>
      <div className='form'>
        <Input
          name='first_name'
          label='First Name'
          value={first_name}
          onChange={onChange}
          onFocus={onFocus}
          error={error.first_name}
        />
        <Input
          name='last_name'
          label='Last Name'
          value={last_name}
          onChange={onChange}
          onFocus={onFocus}
          error={error.last_name}
        />
        <Gender
          name='gender'
          onClick={onChange} 
        />
        <DateInput
          name='birthday'
          value={birthday} 
          label='Date of Birth'
          onChange={e => onChangeDate(e)}
          onFocus={onFocus}
          error={error.birthday}
          date='dd LLL yyyy'
          year={true}
          month={true}
          mode='select'
          maxDate={addYears(new Date(), -18)}
        />
        <Input 
          name='town'
          label='Home Town'
          value={town}
          onChange={onChange}
          onFocus={onFocus}
          error={error.town}
      />
      </div>
      <ButtonOne text='Update Profile' type='submit' isClass='green' />
    </form>
  )
};

Form.propTypes = {
  update_basic: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  clearUserErrors: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: state_user,
  errors: state_user_error
});

export default connect( mapStateToProps, { update_basic, clearUserErrors } )(Form);