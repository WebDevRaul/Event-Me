import React from 'react';
import PropTypes from 'prop-types';

import StyledButtonOne from './Styled_ButtonOne';

const ButtonOne = ({ text, isClass }) => {
  return (
    <StyledButtonOne isClass={isClass}>
      <p>{text}</p>
    </StyledButtonOne>
  )
};

ButtonOne.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.string,
}

export default ButtonOne;