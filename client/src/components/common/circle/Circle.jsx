import React from 'react';
import StyledCircle from './Styled_Circle';
import User from '../../../components/common/user/User';

const Circle = () => (
  <StyledCircle>
    <div className='top'>
      <div className='inner-circle' />
    </div>
    <div className='bottom' />
    <User />
  </StyledCircle>
)

export default Circle;