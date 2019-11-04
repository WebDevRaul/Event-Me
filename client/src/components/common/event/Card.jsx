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


const Card = ({ state, user, isAuth, edit, history, join_event, leave_event, delete_event }) => {
  const [alert, setAlert] = useState(undefined);
  const { user_id } = user;
  const { title, date: { day, time }, author: { first_name, _id }, evt_id, members } = state;
  const title_name = title.split(' ').join('-');
  const { joined } = isJoined({ members, user_id });
  
  const onJoinEvt = () => {
    if(!isAuth) return setAlert('Sign In to join this event');
    join_event({ evt_id, user });
  }
  const onLeaveEvt = () => leave_event({ evt_id, user });
  const onMenageEvt = () => history.push(`/home/${evt_id}-${title_name}/manage-event`);
  const onUpdateEvt = () => history.push(`/home/${evt_id}-${title_name}/manage-event/update`);
  const onDeleteEvt = () => delete_event({ _id: evt_id, history })

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
        { !edit && <JoinAndLeave isJoined={joined} isAuth={isAuth} onJoinEvt={onJoinEvt} onLeaveEvt={onLeaveEvt}/> }
        { (!edit && _id === user_id) && <ManageEvt onMenageEvt={onMenageEvt} />}
        { edit && <UpdateAndDelete onUpdateEvt={onUpdateEvt} onDeleteEvt={onDeleteEvt}/> }
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
  leave_event: PropTypes.func.isRequired,
  delete_event: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  user: state_user
});

export default connect(mapStateToProps, { join_event, leave_event, delete_event })(withRouter(Card));