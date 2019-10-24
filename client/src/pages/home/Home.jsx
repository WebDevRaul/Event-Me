import React from 'react';

import ListOfEvents from '../../components/home/listOfEvents/ListOfEvents';
import RecentEvents from '../../components/home/recentEvents/RecentEvents';

import StyledHome from './Styled_Home';

const Home = () => {
  return (
    <StyledHome>
      <div className='home'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-8'><ListOfEvents /></div>
          <div className='col-12 col-sm-4'><RecentEvents /></div>
        </div>
      </div>
    </StyledHome>
  )
}

export default Home;