import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonOne from '../../components/common/buttonOne/ButtonOne';
import SubTitle from '../../components/common/subTitle/SubTitle';

const User = ({ onClick, onSignOut }) => {
  return (
    <div className='user'>
      <SubTitle text='Username' /><span></span>
      <div className='wrapper'>
        <div className='list'>
          <span className='tip' />
          <div ><Link to='create-event' onClick={onClick}>Create Event</Link></div>
          <div ><Link to='/to-do'>My Events</Link></div>
          <div ><Link to='/profile'>My Profile</Link></div>
          <div ><Link to='/setings'>Setings</Link></div>
          <div ><Link to='/event-me' onClick={onSignOut}>Sign Out</Link></div>
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