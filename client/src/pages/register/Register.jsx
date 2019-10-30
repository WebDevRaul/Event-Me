import React from 'react';

import Circle from '../../components/common/circle/Circle';
import Form from '../../components/register/Form';
import UserSvg from '../../assets/svg/UserSvg';

import StyledRegister from './Styled_Register';

const Register = () => {
  return (
    <StyledRegister>
      <div className='register'>
        <Circle isBgk='yes'>
          <UserSvg width='50px' height='50px' />  
        </Circle>
        <Form />
      </div>
    </StyledRegister>
  )
};

export default Register;