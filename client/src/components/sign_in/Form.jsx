import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { sign_in } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_isAuth } from '../../redux/selectors/user';
import Input from '../common/input/Input';
import ButtonOne from '../common/buttonOne/ButtonOne';
import validateSignIn from './utils/Validate';

const Form = ({ sign_in, isAuth }) => {
  const [state, setState] = useState({ email: 'Mark@gmail.com', password: '123456' });
  const [ error, setErrors ] = useState({ email: undefined, password: undefined });
  const { email, password } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });

  const onFocus = e => { 
    if( email || password !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: undefined });
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    // Validate form
    const { errors, isValid } = validateSignIn({ email, password });
    if(!isValid) { setErrors({ ...error, ...errors }) } 
    else { sign_in({ email, password }); }
  };

  // Redirect on Dashboard
  if(isAuth) return <Redirect to='/event-me' />;

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

Form.propTypes = {
  sign_in: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
}

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth
});

export default connect(mapStateToProps, { sign_in })(Form);