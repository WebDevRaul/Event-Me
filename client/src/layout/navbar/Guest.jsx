import React from 'react';

import { Link } from 'react-router-dom';
import ButtonOne from '../../components/common/buttonOne/ButtonOne';

const Guest = () => {
  return (
    <>
      <li><Link to='/sign-in'><ButtonOne text='Sign In' isClass='box' /></Link></li>
      <li><Link to='register'><ButtonOne text='Register' isClass='box' /></Link></li>
    </>
  )
}

export default Guest;