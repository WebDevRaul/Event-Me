import React from 'react';
import PropTypes from 'prop-types';
import Li from './Li';

const Navigation = ({ onClick, state }) => {
  const { basic, about, photo, account } = state;
  return (
    <div className='navigation'>
      <ul className="list">
        <li className="path">Profile</li>
        <Li text='Basic' isClass={basic} onClickLi={onClick} name='basic'/>
        <Li text='About Me' isClass={about} onClickLi={onClick} name='about'/>
        <Li text='My Photo' isClass={photo} onClickLi={onClick} name='photo'/>
      </ul>
      <ul className="list">
        <li className="path">Account</li>
        <Li isClass={account} text='My Account' onClickLi={onClick} name='account'/>
      </ul>
    </div>
  )
}

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

export default Navigation;