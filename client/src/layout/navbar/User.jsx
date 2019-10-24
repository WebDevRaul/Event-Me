import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ onClick, onSignOut }) => {
  return (
    <>
      <li><Link to='/profile' onClick={onClick}>Profile</Link></li>
      <li><span className='sign-out' onClick={onSignOut}>Sign out</span></li>
    </>
  )
}

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
}

export default User;