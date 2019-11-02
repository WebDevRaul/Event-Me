import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { join_event } from '../../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_user } from '../../../redux/selectors/user';

import Title from '../title/Title';
import ButtonOne from '../buttonOne/ButtonOne';
import { isJoined } from './utils/isJoined';


const Card = ({ isAuth, user, join_event, state, history, edit }) => {
  const [alert, setAlert] = useState(undefined);
  const { first_name, user_id } = user;
  const { title, date, hostedBy, evt_id, members } = state;
  const title_name = title.split(' ').join('-');

  const onClick = () => {
    if(!isAuth) return setAlert('Sign In to join this event');
    const { joined } = isJoined({ members, user_id });
    if(joined) return setAlert('You already joined this event');
    join_event({ evt_id, user: {first_name, user_id} })
  }

  const onMenageEvent = () => history.push(`/my-events/manage-event/${evt_id}-${title_name}`);
  const onEdit = () => history.push(`/my-events/manage-event/${evt_id}-${title_name}/edit`);
  const onDelete = () => {};

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
        {(isAuth && edit) && <ButtonOne text='Edit' isClass='green' onClick={onEdit} />}
        {(isAuth && edit) && <ButtonOne text='Delete' isClass='red' onClick={onDelete} />}
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