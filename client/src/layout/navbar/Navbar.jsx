import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sign_out } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_user} from '../../redux/selectors/user';
import classnames  from 'classnames';
import { Link } from 'react-router-dom';

import Guest from './Guest';
import User from './User';
import ButtonOne from '../../components/common/buttonOne/ButtonOne';

import StyledNavbar from './Styled_Navbar';

const Navbar = ({ isAuth, sign_out, user, history }) => {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const plus18px = history.location.pathname === '/settings/basic' ? 1 : 0;

  // CDM & CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  const onClickOutside = e => {
    if(!show) return null;
    if(!!!e.target.className) return null;
    setShow(!show)
  };

  const onToggle = () => setOpen(!isOpen);
  const onClick = () => { setShow(!show) };
  const onSignOut = () => sign_out();

  return (
    <StyledNavbar show={show} plus18px={plus18px}>
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
              <li><Link to='/home'>Events</Link></li>
              <li><Link to='/create-event'><ButtonOne text='Create Event' isClass='green box' /></Link></li>
            </div>
            <div className='pages'>
              {isAuth ? <User onClick={onClick} onSignOut={onSignOut} user={user} /> : <Guest />}
            </div>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  )
};

Navbar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  sign_out: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  user: state_user
});

export default connect( mapStateToProps, { sign_out } )(withRouter(Navbar));