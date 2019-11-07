import React from 'react'
import Status from '../../common/Form/radio/Status'

const About = () => {
  const onClick = e => console.log(e.target);
  return (
    <div>
      <Status name='status' onClick={onClick}/>
    </div>
  )
}

export default About;