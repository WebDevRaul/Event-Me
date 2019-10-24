import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonOne from '../../components/common/buttonOne/ButtonOne';

const User = ({ onClick, onSignOut }) => {
  return (
    <>
      <li><Link to='/profile' onClick={onClick}>Profile</Link></li>
      <li><span className='sign-out' onClick={onSignOut}><ButtonOne text='Sign Out' isClass='box' /></span></li>
    </>
  )
}

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
}

export default User;