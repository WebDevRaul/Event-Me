import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_selectedEvent } from '../../redux/selectors/event';

import Header from '../../components/event_Info/Header';
import Info from '../../components/event_Info/Info';
import Chat from '../../components/event_Info/Chat';
import SideBar from '../../components/event_Info/SideBar';

import StyledEventInfo from './Styled_EventInfo';

const EventInfo = ({ state: { date, hostedBy, description, members} }) => {
  return (
    <StyledEventInfo>
      <div className='event-info'>
        <div className="row no-gutters">
          <div className="col-12 col-sm-8">
            <Header date={date} name={hostedBy} />
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
  state: PropTypes.object.isRequired
}

const mapStateToProps = createStructuredSelector({
  state: state_selectedEvent
});

export default connect(mapStateToProps, null)(EventInfo);