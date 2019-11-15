import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../common/title/Title';

const Event = () => {
  return (
    <div className='event'>
      <div className='background'>
        <div className='cool-image' />
        <i>event</i>
      </div>
      <div className='body'>
        <Title text='Event Title' />
        <time>date here</time>
      </div>
    </div>
  )
}

Event.propTypes = {

}

export default Event;