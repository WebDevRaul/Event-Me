import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ButtonOne from '../../common/buttonOne/ButtonOne';

const Footer = ({ description, title, _id, history }) => {
  const name = title.split(' ').join('-');
  const onClick = () => history.push(`/home/${_id}-${name}`)
  return (
    <div className='footer'>
      <p>{description}</p>
      <ButtonOne text='View' onClick={onClick} isClass='blue' />
    </div>
  )
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(Footer);