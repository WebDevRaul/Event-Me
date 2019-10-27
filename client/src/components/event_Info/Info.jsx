import React from 'react';
import PropTypes from 'prop-types';

import SubTitle from '../common/subTitle/SubTitle';

const Info = ({ date, text }) => {
  return (
    <div className='info'>
      <p>{text}</p>
      <p><time>{date}</time></p>
      <p>map location</p>
    </div>
  )
}

SubTitle.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Info;