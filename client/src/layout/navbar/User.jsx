import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SubTitle from '../../components/common/subTitle/SubTitle';

const User = ({ onClick, onSignOut }) => {
  const name = 'Joana';
  return (
    <div className='user' onClick={onClick}>
      <SubTitle text={name} /><span></span>
      <div className='wrapper'>
        <div className='list'>
          <span className='tip' />
          <Link to='create-event'>Create Event</Link>
          <Link to='/my-events'>My Events</Link>
          <Link to='/profile'>My Profile</Link>
          <Link to='/settings'>Settings</Link>
          <Link to='/event-me' onClick={onSignOut}>Sign Out</Link>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
}

export default User;