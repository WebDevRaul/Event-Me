import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../common/user/Photo';

const Members = ({ members }) => {
  return (
    <div className='members'>
      {members && members.map(({ user_id, photo, first_name }) => <Photo key={user_id} photo={undefined} width='40px' height='40px' alt={first_name} isBgk={1} isClr={1} /> )}
    </div>
  )
}

Members.propTypes = {
  members: PropTypes.array
}

export default Members;