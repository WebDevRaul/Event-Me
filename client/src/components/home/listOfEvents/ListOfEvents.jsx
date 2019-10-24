import React from 'react';

import Event from './Event';

import StyledListOfEvents from './Styled_ListOfEvents';

const ListOfEvents = () => {
  return (
    <StyledListOfEvents>
      <div className='list-of-events'>
        <Event />
      </div>
    </StyledListOfEvents>
  )
}

export default ListOfEvents;