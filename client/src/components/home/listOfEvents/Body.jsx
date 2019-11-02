import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ date, location }) => {
  return (
    <div className='body'>
      <div>{date}</div>
      <>|</>
      <div>{location}</div>
    </div>
  )
}

Body.propTypes = {
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default Body;