import React from 'react'
import ButtonOne from '../../common/buttonOne/ButtonOne';
import Form from './Form';

import StyledRecentEvents from './Styled_RecentEvents';

const RecentEvents = () => {
  const onCreateEvent = () => {
    
  }
  return (
    <StyledRecentEvents>
      <ButtonOne text='Create Event' isClass='green' onClick={onCreateEvent} />
      <Form />
    </StyledRecentEvents>
  )
}

export default RecentEvents;