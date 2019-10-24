import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Guest = ({ onClick }) => {
  return (
    <>
      <li ><Link to='/sign-in' onClick={onClick}>Sign In</Link></li>
      <li ><Link to='register' onClick={onClick}>Register</Link></li>
    </>
  )
}

Guest.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Guest;