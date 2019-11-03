import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ date: { day, time }, location }) => {
  return (
    <div className='body'>
      <p><time>{day} at{' '} {time}</time></p>
    </div>
  )
}

Body.propTypes = {
  date: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired
}

export default Body;