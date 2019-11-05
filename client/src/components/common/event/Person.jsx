import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../user/Photo';

const Person = ({ person: { first_name } }) => {
  return (
    <div className='person'>
      <Photo photo={undefined} width='40px' height='40px' alt={first_name} /><p>{first_name}</p>
    </div>
  )
}

Person.propTypes = {
  person: PropTypes.object.isRequired
}

export default Person;