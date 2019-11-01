import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { join_event } from '../../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_user } from '../../../redux/selectors/user';

import Title from '../title/Title';
import ButtonOne from '../buttonOne/ButtonOne';


const Card = ({ isAuth, user, join_event, state, history, edit }) => {
  const [alert, setAlert] = useState(undefined);
  const { name, user_id } = user;
  const { title, date, hostedBy, evt_id } = state;

  const onClick = () => {
    if(!isAuth) return setAlert('Sign In to join this event');
    join_event({ evt_id, user: {name, user_id} })
  }

  const onMenageEvent = () => history.push('/my-events');

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
        {alert}
        {!edit && <ButtonOne text='JOIN THIS EVENT' isClass='blue' onClick={onClick} />}
        {(isAuth && !edit) && <ButtonOne text='MENAGE EVENT' isClass='blue' onClick={onMenageEvent} />}
        {(isAuth && edit) && <ButtonOne text='Edit' isClass='green' onClick={onMenageEvent} />}
        {(isAuth && edit) && <ButtonOne text='Delete' isClass='red' onClick={onMenageEvent} />}
      </div>
    </div>
  )
};

Card.propTypes = {
  state: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  join_event: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  edit: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  user: state_user
});

export default connect(mapStateToProps, { join_event })(withRouter(Card));