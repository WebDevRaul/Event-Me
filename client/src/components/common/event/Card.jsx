import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { join_event, leave_event } from '../../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_user } from '../../../redux/selectors/user';

import Title from '../title/Title';
import ButtonOne from '../buttonOne/ButtonOne';
import { isJoined } from './utils/isJoined';
import JoinAndLeave from './JoinAndLeave';
import EditAndDelete from './EditAndDelete';


const Card = ({ state, user, isAuth, edit, history, join_event, leave_event }) => {
  const [alert, setAlert] = useState(undefined);
  const { user_id } = user;
  const { title, date: { day, time }, hostedBy, evt_id, members } = state;
  const title_name = title.split(' ').join('-');
  const { joined } = isJoined({ members, user_id });
  
  const onJoinEvt = () => {
    if(!isAuth) return setAlert('Sign In to join this event');
    join_event({ evt_id, user });

  }
  const onLeaveEvt = () => leave_event({ evt_id, user });

  const onMenageEvent = () => history.push(`/my-events/manage-event/${evt_id}-${title_name}`);
  // const onEdit = () => history.push(`/my-events/manage-event/${evt_id}-${title_name}/edit`);
  // const onDelete = () => {};

  return (
    <div className='header'>  
      <div className='top'>
        <div>
        <Title text={title} />
        <time>{day} at{' '} {time}</time>
        <p>Sugested by <strong>{hostedBy}</strong></p>
        </div>
      </div>
      <div className='buttom'>
        {alert}
        { !edit && <JoinAndLeave isJoined={joined} isAuth={isAuth} onJoinEvt={onJoinEvt} onLeaveEvt={onLeaveEvt}/> }
        { (!edit && isAuth) &&  <ButtonOne text='MENAGE EVENT' isClass='blue' onClick={onMenageEvent} />}
        { edit && <EditAndDelete /> }
      </div>
    </div>
  )
};

Card.propTypes = {
  state: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
  edit: PropTypes.bool,
  history: PropTypes.object.isRequired,
  join_event: PropTypes.func.isRequired,
  leave_event: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  user: state_user
});

export default connect(mapStateToProps, { join_event, leave_event })(withRouter(Card));