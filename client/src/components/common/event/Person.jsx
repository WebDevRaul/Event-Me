import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../user/Photo';

const Person = ({ person: { first_name, secure_url } }) => {
  return (
    <div className='person'>
      <Photo photo={secure_url} width='40px' height='40px' alt='member' /><p>{first_name}</p>
    </div>
  )
}

Person.propTypes = {
  person: PropTypes.object.isRequired
}

export default Person;