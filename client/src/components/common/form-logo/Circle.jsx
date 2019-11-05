import React from 'react';
import PropTypes from 'prop-types';
import InnerCircle from './Inner_Circle';

import StyledCircle from './Styled_Circle';

const Circle = ({ children, isBgk }) => (
  <StyledCircle isBgk={isBgk}>
    <div className='top'>
      <div className='inner-circle' />
    </div>
    <div className='bottom' />
    <InnerCircle>
      { children }
    </InnerCircle>
  </StyledCircle>
);

Circle.propTypes = {
  children: PropTypes.object.isRequired,
  isBgk: PropTypes.string
}

export default Circle;