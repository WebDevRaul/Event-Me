import React from 'react';
import PropTypes from 'prop-types';

import Title from '../common/title/Title';
import ButtonOne from '../common/buttonOne/ButtonOne';


const Header = ({ title, date, name }) => {
  return (
    <div className='header'>
      <div className='top'>
        <div>
        <Title text={title} />
        <time>{date}</time>
        <p>Sugested by <strong>{name}</strong></p>
        </div>
      </div>
      <div className='buttom'>
        <ButtonOne text='JOIN THIS EVENT' isClass='blue' />
      </div>
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Header;