import React from 'react';
import PropTypes from 'prop-types';
import Li from './Li';

const Navigation = ({ onClick }) => {
  return (
    <div className='navigation'>
      <ul className="list">
        <li className="path">Profile</li>
        <Li text='Basic' isClass={`path hover active`} onClickLi={onClick} name='basic'/>
        <Li text='About Me' isClass={`path hover`} onClickLi={onClick} name='about'/>
        <Li text='My Photo' isClass={`path hover`} onClickLi={onClick} name='photo'/>
      </ul>
      <ul className="list">
        <li className="path">Account</li>
        <Li isClass={`path hover`} text='My Account' onClickLi={onClick} name='account'/>
      </ul>
    </div>
  )
}

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Navigation;