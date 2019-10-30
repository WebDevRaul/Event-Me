import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Input from '../../components/common/input/Input';
import StyledSignIn from './Styled_SignIn';
import ButtonOne from '../../components/common/buttonOne/ButtonOne';
import Circle from '../../components/common/circle/Circle';



const SignIn = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const [ error, setErrors ] = useState({ email: undefined, password: undefined });
  const { email, password } = state;

  const onChange = e => setState({...state , [e.target.name]: e.target.value });

  const onFocus = e => { }

  const onSubmit = e => {}

  return (
    <StyledSignIn>
      <div className='sign-in'>
        <Circle />
        <form noValidate >
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
          <ButtonOne text='Submit' onClick={onSubmit} isClass='blue' />
        </form>
      </div>
    </StyledSignIn>
  )
};

SignIn.propTypes = {

};

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, {  })(SignIn);