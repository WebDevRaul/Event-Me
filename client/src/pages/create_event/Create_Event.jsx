import React from 'react';

import Circle from '../../components/common/form-logo/Circle';
import Form from '../../components/create_event/Form';
import ButtonOne from '../../components/common/buttonOne/ButtonOne';

import StyledCreateEvent from './Styled_Create_Event';

const CreateEvent = ({ history }) => {
  return (
    <StyledCreateEvent>
      <div className='go-back' onClick={() => history.goBack()}>
        <ButtonOne text='Go Back' />
      </div>
      <div className='create-event'>
        <Circle isBgk='yes'>
          <><i className='fas fa-calendar-plus fa-3x'></i></>
        </Circle>
        <Form />
      </div>
    </StyledCreateEvent>
  )
}

export default CreateEvent;