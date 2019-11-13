import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../../common/utils/isEmpty/isEmpty';

const Photo = ({ secure_url }) => {
  return (
    <>
      {
        !isEmpty(secure_url)
        ?  <img src={secure_url} alt='select' />
        :  <i className='fas fa-user fa-5x'></i>
      }
    </>
  )
}

Photo.propTypes = {
  secure_url: PropTypes.string.isRequired
}

export default Photo;