import React from 'react';
import PropTypes from 'prop-types';
import StyledSubTitle from './Styled_SubTitle';


const SubTitle = ({ text }) => (
  <StyledSubTitle>
    {text}
  </StyledSubTitle>
);

SubTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default SubTitle;