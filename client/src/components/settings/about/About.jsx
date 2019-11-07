import React from 'react'

import Title from '../../common/title/Title';

import StyledAbout from './Styled_About';
import Form from './Form';

const About = () => (
  <StyledAbout>
    <div className='about'>
      <Title text='About' />
      <Form />
    </div>
  </StyledAbout>
)

export default About;