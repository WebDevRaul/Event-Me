import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Photo from '../../components/common/user/Photo';
import isEmpty from '../../components/common/utils/isEmpty/isEmpty';

const User = ({ onClick, onSignOut, photo, name }) => {
  const URL = isEmpty(photo) ? undefined : photo.secure_url
  return (
    <div className='user' onClick={onClick}>
      <div className='info'>
        <Photo photo={URL} width='25px' height='25px' alt='user' />
        <p className='mb-0'>{name}</p>
      </div>
      <div className='wrapper'>
        <div className='list'>
          <span className='tip' />
          <Link to='/create-event'><i className='fas fa-plus'></i>Create Event</Link>
          <Link to='/my-events'><i className='fas fa-calendar'></i>My Events</Link>
          <Link to='/profile'><i className='fas fa-user'></i>My Profile</Link>
          <Link to='/settings'><i className='fas fa-cogs'></i>Settings</Link>
          <Link to='/home' onClick={onSignOut}><i className='fas fa-sign-out-alt'></i>Sign Out</Link>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
  photo: PropTypes.object,
  name: PropTypes.string.isRequired,
}

export default User;