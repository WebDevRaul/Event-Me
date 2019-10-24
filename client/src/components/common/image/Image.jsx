import React from 'react';
import PropTypes from 'prop-types';
import StyledImage from './Styled_Image';

const Image = ({ photo, height, width, alt }) => (
  <StyledImage>
    <img src={photo} height={height} width={width} alt={alt} />
  </StyledImage>
);

Image.propTypes = {
  photo: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image;