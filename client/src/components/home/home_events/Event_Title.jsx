import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../common/title/Title';
import PhotoCircle from '../../common/user/Photo_Circle';

const EventTitle = ({ author: { first_name }, title }) => {
  return (
    <div className='event-title'>
      <PhotoCircle photo={undefined} width='50px' height='50px' alt={first_name} />
      <div className='info'>
        <Title text={title} />
        <p>Hosted by {first_name}</p>
      </div>
    </div>
  )
};

EventTitle.propTypes = {
  author: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default EventTitle;