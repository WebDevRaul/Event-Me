import React from 'react';

import Header from '../../components/event_Info/Header';
import Info from '../../components/event_Info/Info';
import Chat from '../../components/event_Info/Chat';
import SideBar from '../../components/event_Info/SideBar';

import StyledEventInfo from './Styled_EventInfo';

const EventInfo = () => {
  return (
    <StyledEventInfo>
      <div className='event-info'>
        <div className="row no-gutters">
          <div className="col-12 col-sm-8">
            <Header />
            <Info />
            <Chat />
          </div>
          <div className="col-12 col-sm-4">
            <SideBar />
          </div>
        </div>
      </div>
    </StyledEventInfo>
  )
}

export default EventInfo;