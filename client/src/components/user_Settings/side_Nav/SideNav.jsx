import React from 'react';
import PropTypes from 'prop-types';
import Li from './Li';

const SideNav = ({ match }) => {
  const { url } = match;
  return (
    <div className='side-nav'>
      <ul className="list">
        <li className="path head">Profile</li>
        <Li text='Basic' url={url} name='basic'/>
        <Li text='About Me' url={url} name='about'/>
        <Li text='My Photo' url={url} name='photo'/>
      </ul>
      <ul className="list">
        <li className="path head">Account</li>
        <Li text='Account' url={url} name='account'/>
      </ul>
    </div>
  )
}

SideNav.propTypes = {
  match: PropTypes.object.isRequired
}

export default SideNav;