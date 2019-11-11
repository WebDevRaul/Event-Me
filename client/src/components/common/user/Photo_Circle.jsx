import React from 'react';
import PropTypes from 'prop-types';
import StyledPhotoCircle from './Styled_Photo_Circle';
import Photo from './Photo';


const PhotoCircle = ({ photo, width, height, alt }) => {
  return (
    <StyledPhotoCircle>
      <div className='circle'>
        <div className='inner-circle'>
          <Photo photo={photo} width={width} height={height} alt={alt} />
        </div>
      </div>
    </StyledPhotoCircle>
  )
}

PhotoCircle.propTypes = {
  photo: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default PhotoCircle;