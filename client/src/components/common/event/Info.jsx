import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ date: { day, time }, text, city, location }) => {
  return (
    <div className='info'>
      <p>{text}</p>
      <p><time>{day} at{' '} {time}</time></p>
      <p>{city}{' - '}{location}</p>
    </div>
  )
}

Info.propTypes = {
  date: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Info;