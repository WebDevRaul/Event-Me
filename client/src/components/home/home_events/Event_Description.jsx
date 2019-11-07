import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ButtonOne from '../../common/buttonOne/ButtonOne';

const EventDescription = ({ description, title, _id, history }) => {
  const name = title.split(' ').join('-');
  const onClick = () => history.push(`/home/${_id}-${name}`)
  return (
    <div className='event-description'>
      <p>{description}</p>
      <ButtonOne text='View' onClick={onClick} isClass='blue' />
    </div>
  )
}

EventDescription.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(EventDescription);