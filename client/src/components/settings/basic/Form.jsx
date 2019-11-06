import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'connect';
// import {  } from '../../../redux/actions/user';
// import { createStructuredSelector } from 'reselect';
// import {  } from '../../../redux/selectors/user';

import ButtonOne from '../../common/buttonOne/ButtonOne';
import Input from '../../common/input/Input';
import DateInput from '../../common/date/DateInput';

const Form = () => {
  const [state, setState] = useState({ name: '', birthday: '', town: ''});
  const [error, setErrors] = useState({ name: '', birthday: '', town: ''});
  const { name, birthday, town } = state;

  const onChange = e => setState({ [e.target.name]: e.target.value });
  const onChangeDate = e => setState({ ...state, birthday: String(e) });
  const onFocus = e => {
    if(name || birthday || town !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: undefined });
    }
  }
  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <form noValidate onSubmit={onSubmit}>
      <div className='form'>
        <Input
          name='name'
          label='Known As'
          value={name}
          onChange={onChange}
          onFocus={onFocus}
          error={error.name}
          autoComplete='off'
          required
        />
        <DateInput
          name='Birthday'
          value={birthday} 
          onChange={e => onChangeDate(e)}
          onFocus={onFocus}
          error={error.date} 
        />
        <Input
          name='town'
          label='Home Town'
          value={town}
          onChange={onChange}
          onFocus={onFocus}
          error={error.name}
          autoComplete='off'
          required
        />
      </div>
      <ButtonOne text='Update Profile' type='submit' isClass='green' />
    </form>
  )
}

export default Form;