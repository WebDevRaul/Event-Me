import React from 'react';
import PropTypes from 'prop-types';
import StyledPhoto from './Styled_Photo';
import isEmpty from '../utils/isEmpty/isEmpty';

const Photo = ({ photo, width, height, alt, isBgk, isClr }) => {
  return (
    <StyledPhoto isBgk={isBgk} isClr={isClr}>
      {
        !isEmpty(photo)
          ?  <img src={photo} width={width} height={height} alt={alt} />
          :  <i className='fas fa-user'></i>
      }
    </StyledPhoto>
  )
}

Photo.propTypes = {
  photo: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isBgk: PropTypes.number,
  isClr: PropTypes.number
}

export default Photo;