import React from 'react';
import PropTypes from 'prop-types';

import StyledCircle from './Styled_Circle';

const Circle = ({ children, isBgk }) => (
  <StyledCircle>
    <div className='top'>
      <div className='inner-circle' />
    </div>
    <div className='bottom' />
    {/* <User isBgk={isBgk}>
      { children }
    </User> */}
  </StyledCircle>
);

Circle.propTypes = {
  children: PropTypes.object.isRequired,
  isBgk: PropTypes.string
}

export default Circle;