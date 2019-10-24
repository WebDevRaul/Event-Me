import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import ButtonOne from '../../components/common/buttonOne/ButtonOne';

const Guest = ({ onClick }) => {
  return (
    <>
      <li ><Link to='/sign-in' onClick={onClick}><ButtonOne text='Sign In' /></Link></li>
      <li ><Link to='register' onClick={onClick}><ButtonOne text='Register' /></Link></li>
    </>
  )
}

Guest.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Guest;