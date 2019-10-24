import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './Styled_Title';


const Title = ({ text }) => (
  <StyledTitle>
    {text}
  </StyledTitle>
);

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title;