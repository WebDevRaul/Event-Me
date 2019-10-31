import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ date, text }) => {
  return (
    <div className='info'>
      <p>{text}</p>
      <p><time>{date}</time></p>
      <p>map location</p>
    </div>
  )
}

Info.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Info;