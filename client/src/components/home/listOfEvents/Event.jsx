import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import Header from './Header';
import Body from './Body';
import Members from './Members';
import Footer from './Footer';

const Event = ({ event: { author, title, date, location, members, description, _id } }) => {
  const day = format(parseISO(date), 'EEEE do LLL');
  const time = format(parseISO(date), 'h:mm a');
  return (
    <div className='event'>
      <Header  author={author} title={title} />
      <Body date={{ day, time }} location={location} />
      <Members members={members} />
      <Footer description={description} title={title} _id={_id} />
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired
}

export default Event;