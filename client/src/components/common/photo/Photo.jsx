import React from 'react';
import PropTypes from 'prop-types';
import StyledPhoto from './Styled_Photo';

const Photo = ({ photo, height, width, alt }) => (
  <StyledPhoto>
    {
      photo
      ? <img src={photo} height={height} width={width} alt={alt} />
      : <i className='fas fa-user fa-2x'></i>
    }
  </StyledPhoto>
);

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Photo;