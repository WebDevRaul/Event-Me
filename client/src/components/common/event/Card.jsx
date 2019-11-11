import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { join_event, leave_event, delete_event } from '../../../redux/actions/event';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_user } from '../../../redux/selectors/user';
import { isJoined } from './utils/isJoined';

import Title from '../title/Title';
import JoinAndLeave from './JoinAndLeave';
import UpdateAndDelete from './UpdateAndDelete';
import ManageEvt from './ManageEvt';


const Card = ({ state, user, isAuth, update, history, join_event, leave_event, delete_event }) => {
  const [alert, setAlert] = useState(undefined);
  const { pathname } = history.location;
  const { title, date: { day, time }, author: { first_name, _id }, evt_id, members } = state;
  const title_name = title.split(' ').join('-');
  const { joined } = isJoined({ members, _id: user._id });
  const root = pathname.startsWith('/home/') ? false : true
  
  const onJoinEvt = () => {
    if(!isAuth) return setAlert('Sign In to join this event');
    const { first_name, _id, image: secure_url } = user;
    join_event({ evt_id, _id, first_name, secure_url });
  }
  const onLeaveEvt = () => {
    const { _id } = user;
    leave_event({ evt_id, _id });
  };
  const onMenageEvt = () => {
    if(root) return history.push(`/my-events/${evt_id}-${title_name}/manage-event`);
    history.push(`/home/${evt_id}-${title_name}/manage-event`);
  }
  const onUpdateEvt = () => {
    if(root) return history.push(`/my-events/${evt_id}-${title_name}/manage-event/update`);
    history.push(`/home/${evt_id}-${title_name}/manage-event/update`)
  }
  const onDeleteEvt = () => delete_event({ _id: evt_id, history });

  return (
    <div className='header'>
      <div className='top'>
        <div>
        <Title text={title} />
        <time>{day} at{' '} {time}</time>
        <p>Sugested by <strong>{first_name}</strong></p>
        </div>
      </div>
      <div className='buttom'>
        {alert}
        {!update && <JoinAndLeave isJoined={joined} isAuth={isAuth} onJoinEvt={onJoinEvt} onLeaveEvt={onLeaveEvt}/>}
        { (!update && _id === user._id) && <ManageEvt onMenageEvt={onMenageEvt} />}
        { update && <UpdateAndDelete onUpdateEvt={onUpdateEvt} onDeleteEvt={onDeleteEvt}/> }
      </div>
    </div>
  )
};

Card.propTypes = {
  state: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
  update: PropTypes.bool,
  history: PropTypes.object.isRequired,
  join_event: PropTypes.func.isRequired,
  leave_event: PropTypes.func.isRequired,
  delete_event: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  user: state_user
});

export default connect(mapStateToProps, { join_event, leave_event, delete_event })(withRouter(Card));