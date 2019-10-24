import React from 'react';
import PropTypes from 'prop-types';

import StyledButtonOne from './Styled_ButtonOne';

const ButtonOne = ({ text, isClass, onClick }) => {
  return (
    <StyledButtonOne>
      <div className={`button-one ${isClass}`} onClick={onClick}>
        <p>{text}</p>
      </div>
    </StyledButtonOne>
  )
};

ButtonOne.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.string,
  onClick: PropTypes.func
}

export default ButtonOne;