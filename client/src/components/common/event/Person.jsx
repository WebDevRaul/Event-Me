import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ person: { first_name } }) => {
  return (
    <div className='person'>
      {first_name}
    </div>
  )
}

Person.propTypes = {
  person: PropTypes.object.isRequired
}

export default Person;