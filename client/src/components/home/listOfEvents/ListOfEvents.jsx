import React from 'react';
import data from '../data/TempData';

import Event from './Event';

import StyledListOfEvents from './Styled_ListOfEvents';

const ListOfEvents = () => {
  return (
    <StyledListOfEvents>
      <div className='list-of-events'>
        {data.map((event, index) => <Event key={index} event={event} />)}
      </div>
    </StyledListOfEvents>
  )
}

export default ListOfEvents;