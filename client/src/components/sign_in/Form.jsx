import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { sign_in } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_isAuth } from '../../redux/selectors/user';
import Input from '../common/input/Input';
import ButtonOne from '../common/buttonOne/ButtonOne';

const Form = ({ sign_in, isAuth }) => {
  const [state, setState] = useState({ email: '', password: '' });
  const [ error, setErrors ] = useState({ email: undefined, password: undefined });
  const { email, password } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });

  const onFocus = e => { }

  const onSubmit = e => {
    e.preventDefault();
    // Validate SignIn form
    sign_in({ user: { email, password }, isAuth: true });
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