import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Input from '../common/input/Input';
import ButtonOne from '../common/buttonOne/ButtonOne';

const Form = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const [ error, setErrors ] = useState({ email: undefined, password: undefined });
  const { email, password } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });

  const onFocus = e => { }

  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <form noValidate onSubmit={onSubmit} >
      <Input 
        name='email'
        label='email'
        value={email}
        onChange={onChange}
        onFocus={onFocus}
        type='email'
        error={error.email}
      />
      <Input 
        name='password'
        label='password'
        value={password}
        onChange={onChange}
        onFocus={onFocus}
        type='password'
        error={error.password}
      />
      <ButtonOne text='Sign In' isClass='blue' type='submit' />
    </form>
  )
}

export default Form;