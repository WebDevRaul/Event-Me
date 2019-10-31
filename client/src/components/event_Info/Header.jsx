import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { join_event } from '../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_user } from '../../redux/selectors/user';

import Title from '../common/title/Title';
import ButtonOne from '../common/buttonOne/ButtonOne';


const Header = ({ isAuth, user, join_event, state }) => {
  const { title, date, hostedBy } = state;
  const onClick = () => {
    if(!isAuth) return null;
    const { name, id } = user;
    const event = { ...state, members: [...state.members, {name, id}] }
    join_event(event)
  }
  return (
    <div className='header'>
      <div className='top'>
        <div>
        <Title text={title} />
        <time>{date}</time>
        <p>Sugested by <strong>{hostedBy}</strong></p>
        </div>
      </div>
      <div className='buttom'>
        <ButtonOne text='JOIN THIS EVENT' isClass='blue' onClick={onClick} />
      </div>
    </div>
  )
};

Header.propTypes = {
  state: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  join_event: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  user: state_user
});

export default connect(mapStateToProps, { join_event })(Header);