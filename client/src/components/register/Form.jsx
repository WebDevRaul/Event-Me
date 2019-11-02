import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/user';
import Input from '../common/input/Input';
import ButtonOne from '../common/buttonOne/ButtonOne';
import validateRegister from './utils/Validate';

const Form = ({ register, history }) => {
  const [state, setState] = useState({ first_name: 'Adam', last_name: 'Mark', email: 'Mark@gmail.com', password: '123456', password2: '123456' });
  const [ error, setErrors ] = useState({ 
    first_name: undefined, last_name: undefined,  email: undefined, password: undefined, password2: undefined 
  });
  const { first_name, last_name, email, password, password2 } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });

  const onFocus = e => { 
    if(first_name || last_name || email || password || password2 !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setErrors({ ...error, [field]: undefined });
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    const user = { first_name, last_name, email, password, password2 }
    // Validate form
    const { errors, isValid } = validateRegister(user);
    if(!isValid) { setErrors({ ...error, ...errors }) } 
    else { register({ user, history }) }
  }

  return (
    <form noValidate onSubmit={onSubmit} >
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
      <ButtonOne text='Register' isClass='blue' type='submit' />
    </form>
  )
}

Form.propTypes = {
  register: PropTypes.func.isRequired
};

export default connect( null , { register })(withRouter(Form));