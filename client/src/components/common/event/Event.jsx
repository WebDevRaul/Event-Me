import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../event_Info/Header';
import Info from '../../event_Info/Info';
import Chat from '../../event_Info/Chat';
import SideBar from '../../event_Info/SideBar';

import StyledMyEvent from './Styled_Event';

const Event = ({ state, edit }) => {
  const { date, description, members } = state;
  return (
    <StyledMyEvent>
      <div className="row no-gutters">
        <div className="col-12 col-sm-8">
          <Header state={state} edit={edit}/>
          <Info date={date} text={description} />
          <Chat />
        </div>
        <div className="col-12 col-sm-4">
          <SideBar arr={members} />
        </div>
      </div>
    </StyledMyEvent>
  )
};

Event.propTypes = {
  state: PropTypes.object.isRequired,
  edit: PropTypes.bool
};

export default Event;