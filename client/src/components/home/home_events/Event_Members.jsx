import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../common/user/Photo';

const EventMembers = ({ members }) => {
  return (
    <div className='event-members'>
      {members && members.map(({ _id, secure_url, first_name }) => <Photo key={_id} photo={secure_url} width='40px' height='40px' alt={first_name} isBgk={1} isClr={1} /> )}
    </div>
  )
}

EventMembers.propTypes = {
  members: PropTypes.array
}

export default EventMembers;