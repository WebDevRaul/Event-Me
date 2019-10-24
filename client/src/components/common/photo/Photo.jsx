import React from 'react';
import PropTypes from 'prop-types';
import StyledPhoto from './Styled_Photo';

const Photo = ({ photo, height, width, alt }) => (
  <StyledPhoto>
    <img src={photo} height={height} width={width} alt={alt} />
  </StyledPhoto>
);

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Photo;