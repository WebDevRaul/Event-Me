import React from 'react';

import Title from '../../common/title/Title';
import Form from './Form';

import StyledBasic from './Styled_Basic';

const Basic = () => {
  return (
    <StyledBasic>
      <div className='basic'>
        <Title text='Basic' />
        <Form />
      </div>
    </StyledBasic>
  )
}

export default Basic;