import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update_events } from '../../redux/actions/event';
import data from './data/TempData';

import ListOfEvents from '../../components/event_Me/listOfEvents/ListOfEvents';
import RecentEvents from '../../components/event_Me/recentEvents/RecentEvents';


const EventMe = ({ update_events }) => {
  // Initial events update
  useEffect(() => { update_events(data) }, [update_events])
  
  return (
      <div className='event-me'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-8'><ListOfEvents /></div>
          <div className='col-12 col-sm-4'><RecentEvents /></div>
        </div>
      </div>
  )
}

EventMe.propTypes = {
  update_events: PropTypes.func.isRequired
}

export default connect(null, { update_events })(EventMe);