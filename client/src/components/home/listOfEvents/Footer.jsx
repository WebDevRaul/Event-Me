import React from 'react';
import PropTypes from 'prop-types';
import SubTitle from '../../common/subTitle/SubTitle';
import ButtonOne from '../../common/buttonOne/ButtonOne';

const Footer = ({ description }) => {
  const onView = () => {}
  return (
    <div className='footer'>
      <SubTitle text={description} />
      <ButtonOne text='View' isClass='blue' onClick={onView} />
    </div>
  )
}

Footer.propTypes = {
  description: PropTypes.string.isRequired
}

export default Footer;