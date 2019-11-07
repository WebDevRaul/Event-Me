import React from 'react';
import PropTypes from 'prop-types';

const EventLocation = ({ date: { day, time }, location, city }) => {
  return (
    <div className='event-location'>
      <p><i className='fas fa-clock'></i><time>{day} at{' '} {time}</time></p>
      <span>{' | '}</span>
      <p><i className='fas fa-map-marked-alt'></i>{city} {' - '} {location}</p>
    </div>
  )
}

EventLocation.propTypes = {
  date: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}

export default EventLocation;