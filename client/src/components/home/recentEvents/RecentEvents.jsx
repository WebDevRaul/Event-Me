import React, { useState } from 'react';
import ButtonOne from '../../common/buttonOne/ButtonOne';

import StyledRecentEvents from './Styled_RecentEvents';

const RecentEvents = () => {
  const [ isOpen, setOpen ] = useState(false);

  const onToggle = () => setOpen(!isOpen);

  return (
    <StyledRecentEvents>
      <ButtonOne text='Create Event' isClass='green' onClick={onToggle} />
      { isOpen && <p>recent events</p> }
    </StyledRecentEvents>
  )
}

export default RecentEvents;