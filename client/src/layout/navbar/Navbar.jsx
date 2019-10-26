import React, { useState } from 'react';
import classnames  from 'classnames';
import { Link } from 'react-router-dom';

import Guest from './Guest';
import User from './User';

import StyledNavbar from './Styled_Navbar';
import ButtonOne from '../../components/common/buttonOne/ButtonOne';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const onToggle = () => setOpen(!isOpen);

  const onClick = () => {
    if(isOpen) setOpen(false);
  };

  const onSignOut = () => {

  }

  const onCreateEvent = () => {
    
  }
  
  const isAuth = true;

  return (
    <StyledNavbar>
      <nav className='navbar navbar-light'>
        <div className='nav-wrapper'>
          <div className='nav-header'>
            <div>logo</div>
            <button type='button' className='navbar-toggler' onClick={onToggle}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <ul className={classnames('nav-links', {'show-nav' : isOpen})} >
            <div className='events'>
              <li><Link to='/event-me' onClick={onClick}>Events</Link></li>
              <li><Link to='/create-event' onClick={onClick}><ButtonOne onClick={onCreateEvent} text='Create Event' isClass='green box' /></Link></li>
            </div>
            <div className='pages'>
              {isAuth ? <User onClick={onClick} onSignOut={onSignOut} /> : <Guest onClick={onClick} />}
            </div>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  )
}

export default Navbar;