import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../common/photo/Photo';

const Members = ({ members }) => {
  return (
    <div className='members'>
      {members && members.map(({ id, photo, first_name }) => <Photo key={id} photo={photo} width='40px' height='40px' alt={first_name} />)}
    </div>
  )
}

Members.propTypes = {
  members: PropTypes.array
}

export default Members;