import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../../common/utils/isEmpty/isEmpty';

const Photo = ({ url }) => {
  return (
    <>
      {
        !isEmpty(url)
        ?  <img src={url} alt='select-photo' />
        :  <i className='fas fa-user fa-5x'></i>
      }
    </>
  )
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
}

export default Photo;