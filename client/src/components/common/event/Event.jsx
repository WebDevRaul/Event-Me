import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import Info from './Info';
import Chat from './Chat';
import Members from './Members';

import StyledEvent from './Styled_Event';

const Event = ({ state: { id, title, date, hostedBy, description, members }, edit }) => {
  return (
    <StyledEvent>
      <div className="row no-gutters">
        <div className="col-12 col-sm-8">
          <Card state={ {evt_id: id, title, date, hostedBy, members} } edit={edit} />
          <Info date={date} text={description} />
          <Chat />
        </div>
        <div className="col-12 col-sm-4">
          <Members arr={members} />
        </div>
      </div>
    </StyledEvent>
  )
};

Event.propTypes = {
  state: PropTypes.object.isRequired,
  edit: PropTypes.bool
};

export default Event;