import React from 'react';
import PropTypes from 'prop-types';

import StyledButtonOne from './Styled_ButtonOne';

const ButtonOne = ({ text, isClass }) => {
  return (
    <StyledButtonOne isClass={isClass}>
      <div className='button-one'>
        <p>{text}</p>
      </div>
    </StyledButtonOne>
  )
};

ButtonOne.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.string,
}

export default ButtonOne;