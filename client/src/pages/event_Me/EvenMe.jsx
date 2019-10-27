import React from 'react';

import ListOfEvents from '../../components/event_Me/listOfEvents/ListOfEvents';
import RecentEvents from '../../components/event_Me/recentEvents/RecentEvents';


const EventMe = () => {
  return (
      <div className='event-me'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-8'><ListOfEvents /></div>
          <div className='col-12 col-sm-4'><RecentEvents /></div>
        </div>
      </div>
  )
}

export default EventMe;