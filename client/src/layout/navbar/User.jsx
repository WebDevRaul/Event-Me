import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Photo from '../../components/common/user/Photo';

const User = ({ onClick, onSignOut, name }) => {
  return (
    <div className='user' onClick={onClick}>
      <div className='info'>
        <Photo photo={undefined} width='25px' height='25px' alt='user' />
        <p className='mb-0'>{name}</p>
      </div>
      <div className='wrapper'>
        <div className='list'>
          <span className='tip' />
          <Link to='/create-event'>Create Event</Link>
          <Link to='/my-events'>My Events</Link>
          <Link to='/profile'>My Profile</Link>
          <Link to='/settings'>Settings</Link>
          <Link to='/home' onClick={onSignOut}>Sign Out</Link>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default User;