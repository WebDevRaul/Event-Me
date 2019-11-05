import React from 'react';

import Form from '../../components/sign_in/Form';
import Circle from '../../components/common/form-logo/Circle';

import StyledSignIn from './Styled_SignIn';

const SignIn = () => {
  return (
    <StyledSignIn>
      <div className='sign-in'>
        <Circle isBgk='yes'>
          <><i className='fas fa-user fa-3x'></i></>
        </Circle>
        <Form />
      </div>
    </StyledSignIn>
  )
};

export default SignIn;