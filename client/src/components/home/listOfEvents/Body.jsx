import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ date: { day, time }, location, city }) => {
  return (
    <div className='body'>
      <p><time>{day} at{' '} {time}</time></p>
      <span>{city} {' - '} {location}</span>
    </div>
  )
}

Body.propTypes = {
  date: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}

export default Body;