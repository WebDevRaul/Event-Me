import React from 'react';

import Form from '../../components/sign_in/Form';
import Circle from '../../components/common/circle/Circle';
import AddUserSvg from '../../assets/svg/AddUserSvg';

import StyledSignIn from './Styled_SignIn';

const SignIn = () => {
  return (
    <StyledSignIn>
      <div className='sign-in'>
        <Circle isBgk='yes'>
          <AddUserSvg width='50px' height='50px' />  
        </Circle>
        <Form />
      </div>
    </StyledSignIn>
  )
};

export default SignIn;