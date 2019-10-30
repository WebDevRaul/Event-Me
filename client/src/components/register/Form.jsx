import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Input from '../common/input/Input';
import ButtonOne from '../common/buttonOne/ButtonOne';

const Form = () => {
  const [state, setState] = useState({ first_name: '', last_name: '', email: '', password: '', password2: '' });
  const [ error, setErrors ] = useState({ email: undefined, password: undefined });
  const { first_name, last_name, email, password, password2 } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });

  const onFocus = e => { }

  const onSubmit = e => {}
  return (
    <form noValidate >
      <Input 
        name='first_name'
        label='First Name'
        value={first_name}
        onChange={onChange}
        onFocus={onFocus}
        type='text'
        error={error.first_name}
      />
      <Input 
        name='last_name'
        label='Last Name'
        value={last_name}
        onChange={onChange}
        onFocus={onFocus}
        type='text'
        error={error.last_name}
      />
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
      <Input 
        name='password2'
        label='Confirm password'
        value={password2}
        onChange={onChange}
        onFocus={onFocus}
        type='password'
        error={error.password2}
      />
      <ButtonOne text='Submit' onClick={onSubmit} isClass='blue' />
    </form>
  )
}

Form.propTypes = {

};

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, {  })(Form);