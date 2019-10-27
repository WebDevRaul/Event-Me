import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ name }) => {
  return (
    <div className='person'>
      {name}
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string.isRequired
}

export default Person;