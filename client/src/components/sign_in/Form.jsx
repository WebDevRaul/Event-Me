import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { sign_in, clearUserErrors } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_user_error } from '../../redux/selectors/user';
import validateSignIn from './utils/Validate';

import FormInput from '../common/Form/input/FormInput';
import ButtonOne from '../common/buttonOne/ButtonOne';

const Form = ({ sign_in, isAuth, errors, clearUserErrors }) => {
  const [state, setState] = useState({ email: 'Mark@gmail.com', password: '123456' });
  const [ error, setErrors ] = useState({ email: undefined, password: undefined });
  const { email, password } = state;

  // Update Errors CDU
  useEffect(() => { 
    setErrors({...error, ...errors});
    // eslint-disable-next-line
  },[errors])

  // Clear Errors CDM & CDUM
  useEffect(() => {
    setErrors({ email: undefined, password: undefined });
    return () => clearUserErrors();
    // eslint-disable-next-line
  },[]);

  const onChange = e => setState({...state , [e.target.name]: e.target.value });

  const onFocus = e => { 
    if( email || password !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: '' });
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateSignIn({ email, password });
    if(!isValid) return setErrors({ ...error, ...errors });
    sign_in({ email, password });
  };

  // Redirect to Dashboard
  if(isAuth) return <Redirect to='/home' />;

  return (
    <form noValidate onSubmit={onSubmit} >
      <FormInput
        name='email'
        label='email'
        value={email}
        onChange={onChange}
        onFocus={onFocus}
        error={error.email}
        type='email'
      />
      <FormInput 
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
  isAuth: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  clearUserErrors: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  errors: state_user_error
});

export default connect(mapStateToProps, { sign_in, clearUserErrors })(Form);