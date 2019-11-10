import React from 'react';
import PropTypes from 'prop-types';

import StyledButtonOne from './Styled_ButtonOne';

const ButtonOne = ({ text, isClass, onClick, type }) => {
  return (
    <StyledButtonOne>
      <button className={`button-one ${isClass}`} type={type} onClick={onClick}>{text}</button>
    </StyledButtonOne>
  )
};

ButtonOne.defaultProps = {
  type: 'button'
}

ButtonOne.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default ButtonOne;