import React from 'react';
import PropTypes from 'prop-types';
import StyledPhoto from './Styled_Photo';

const Photo = ({ photo, width, height, alt, isBgk, isClr }) => {
  return (
    <StyledPhoto isBgk={isBgk} isClr={isClr}>
      {
        photo
          ?  <img src={photo} width={width} height={height} alt={alt} />
          :  <i className='fas fa-user'></i>
      }
    </StyledPhoto>
  )
}

Photo.propTypes = {
  photo: PropTypes.object,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isBgk: PropTypes.number,
  isClr: PropTypes.number
}

export default Photo;