import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { join_event } from '../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_user } from '../../redux/selectors/user';

import Title from '../common/title/Title';
import ButtonOne from '../common/buttonOne/ButtonOne';


const Header = ({ title, date, name, event_id, isAuth, user, join_event }) => {
  const onClick = () => {
    if(!isAuth) return null;
    const { name, id } = user;
    join_event({ event_id, user: { id, name } })
  }
  return (
    <div className='header'>
      <div className='top'>
        <div>
        <Title text={title} />
        <time>{date}</time>
        <p>Sugested by <strong>{name}</strong></p>
        </div>
      </div>
      <div className='buttom'>
        <ButtonOne text='JOIN THIS EVENT' isClass='blue' onClick={onClick} />
      </div>
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  join_event: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  user: state_user
});

export default connect(mapStateToProps, { join_event })(Header);