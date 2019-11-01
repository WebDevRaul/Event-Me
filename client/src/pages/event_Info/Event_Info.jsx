import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_events } from '../../redux/selectors/event';

import Header from '../../components/event_Info/Header';
import Info from '../../components/event_Info/Info';
import Chat from '../../components/event_Info/Chat';
import SideBar from '../../components/event_Info/SideBar';

import StyledEventInfo from './Styled_EventInfo';
import NotFound from '../not_Found/NotFound';

const EventInfo = ({ state, history: { location: { pathname } } }) => {
  const end_id = pathname.slice(10).indexOf('-');
  const event_id = pathname.slice(10).slice(0, end_id); 
  const [event_state] = state.filter(i => i.id === event_id);
  if(!!!event_state) return <NotFound />
  const { date, description, members } = event_state;

  return (
    <StyledEventInfo>
      <div className='event-info'>
        <div className="row no-gutters">
          <div className="col-12 col-sm-8">
            <Header state={event_state} />
            <Info date={date} text={description} />
            <Chat />
          </div>
          <div className="col-12 col-sm-4">
            <SideBar arr={members} />
          </div>
        </div>
      </div>
    </StyledEventInfo>
  )
};

EventInfo.propTypes = {
  state: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
}

const mapStateToProps = createStructuredSelector({
  state: state_events
});

export default connect(mapStateToProps, null)(EventInfo);