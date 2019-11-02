import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update_events } from '../../redux/actions/event';

import ListOfEvents from '../../components/home/listOfEvents/ListOfEvents';
import RecentEvents from '../../components/home/recentEvents/RecentEvents';


const Home = ({ update_events }) => {
  // Initial events update
  // useEffect(() => { update_events(data) }, [update_events])
  
  return (
      <div className='home'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-8'><ListOfEvents /></div>
          <div className='col-12 col-sm-4'><RecentEvents /></div>
        </div>
      </div>
  )
}

Home.propTypes = {
  update_events: PropTypes.func.isRequired
}

export default connect(null, { update_events })(Home);