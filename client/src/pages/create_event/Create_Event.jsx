import React from 'react';
import Circle from '../../components/common/circle/Circle';
import Form from '../../components/create_event/Form';

import StyledCreateEvent from './Styled_Create_Event';

const CreateEvent = () => {
  return (
    <StyledCreateEvent>
      <div className='create-event'>
        <Circle isBgk='yes'>
           <>to do</>
        </Circle>
        <Form />
      </div>
    </StyledCreateEvent>
  )
}

export default CreateEvent;