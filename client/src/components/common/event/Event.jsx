import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import Card from './Card';
import Info from './Info';
import Chat from './Chat';
import Members from './Members';

import StyledEvent from './Styled_Event';

const Event = ({ state: { _id, title, date, author, description, location, city, members }, update, my_evt }) => {
  const day = format(parseISO(date), 'EEEE do LLL');
  const time = format(parseISO(date), 'h:mm a');
  return (
    <StyledEvent>
      <div className="row no-gutters">
        <div className="col-12 col-sm-8">
          <Card state={ {evt_id: _id, title, date: { day, time }, author, members} } update={update} my_evt={my_evt} />
          <Info date={{ day, time }} text={description} city={city} location={location} />
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
  update: PropTypes.bool,
  my_evt: PropTypes.bool
};

export default Event;