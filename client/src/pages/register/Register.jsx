import React from 'react';

import Circle from '../../components/common/Form/form-logo/Circle';
import Form from '../../components/register/Form';


import StyledRegister from './Styled_Register';

const Register = () => {
  return (
    <StyledRegister>
      <div className='register'>
        <Circle isBgk='yes'>
          <><i className='fas fa-user-plus fa-3x'></i></>
        </Circle>
        <Form />
      </div>
    </StyledRegister>
  )
};

export default Register;