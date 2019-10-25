import React, { useState } from 'react';
import ButtonOne from '../../common/buttonOne/ButtonOne';

import StyledRecentEvents from './Styled_RecentEvents';
import Form from './Form';

const RecentEvents = () => {
  const [ isOpen, setOpen ] = useState(false);

  const onToggle = () => setOpen(!isOpen);

  return (
    <StyledRecentEvents>
      <ButtonOne text='Create Event' isClass='green' onClick={onToggle} />
      { isOpen && <Form onToggle={onToggle}/> }
    </StyledRecentEvents>
  )
}

export default RecentEvents;