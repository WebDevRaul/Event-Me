import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import EventTitle from './Event_Title';
import EventLocation from './Event_Location';
import EventMembers from './Event_Members';
import EventDescription from './Event_Description';

const Event = ({ event: { author, title, date, city, location, members, description, _id } }) => {
  const day = format(parseISO(date), 'EEEE do LLL');
  const time = format(parseISO(date), 'h:mm a');
  return (
    <div className='event'>
      <EventTitle  author={author} title={title} />
      <EventLocation date={{ day, time }} location={location} city={city} />
      <EventMembers members={members} />
      <EventDescription description={description} title={title} _id={_id} />
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired
}

export default Event;