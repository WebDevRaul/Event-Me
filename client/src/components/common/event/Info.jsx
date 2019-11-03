import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ date: { day, time }, text }) => {
  return (
    <div className='info'>
      <p>{text}</p>
      <p><time>{day} at{' '} {time}</time></p>
      <p>map location</p>
    </div>
  )
}

Info.propTypes = {
  date: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default Info;