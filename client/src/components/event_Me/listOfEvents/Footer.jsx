import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SubTitle from '../../common/subTitle/SubTitle';
import ButtonOne from '../../common/buttonOne/ButtonOne';

const Footer = ({ description, title }) => {
  const id = title.split(' ').join('-');
  return (
    <div className='footer'>
      <SubTitle text={description} />
      <Link to={`/event-me/${id}`}>
        <ButtonOne text='View' isClass='blue' />
      </Link>
    </div>
  )
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Footer;