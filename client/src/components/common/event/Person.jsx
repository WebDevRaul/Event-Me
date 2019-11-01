import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ person: { name } }) => {
  return (
    <div className='person'>
      {name}
    </div>
  )
}

Person.propTypes = {
  person: PropTypes.object.isRequired
}

export default Person;