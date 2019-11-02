import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Body from './Body';
import Members from './Members';
import Footer from './Footer';

const Event = ({ event: { author, title, date, location, members, description, _id } }) => {
  return (
    <div className='event'>
      <Header  name={author} title={title} />
      <Body date={date} location={location} />
      <Members members={members} />
      <Footer description={description} title={title} _id={_id} />
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired
}

export default Event;