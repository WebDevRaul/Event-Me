import React from 'react';

import Title from '../../common/title/Title';

import StyledActivity from './Styled_Activity';

const Activity = () => {
  return (
    <StyledActivity>
      <div className='activity'>
        <Title text='Recent Activity' />
        <p>recent activity</p>
      </div>
    </StyledActivity>
  )
}

export default Activity;