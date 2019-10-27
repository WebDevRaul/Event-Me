import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Body from './Body';
import Members from './Members';
import Footer from './Footer';

const Event = ({ event: { hostedBy, title, date, location, members, description, id } }) => {
  return (
    <div className='event'>
      <Header  name={hostedBy} title={title} />
      <Body date={date} location={location} />
      <Members members={members} />
      <Footer description={description} title={title} id={id} />
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired
}

export default Event;