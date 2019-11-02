import React from 'react';
import PropTypes from 'prop-types';
import photo from '../../../assets/images/questionMark.jpg';

import Title from '../../common/title/Title';
import Photo from '../../common/photo/Photo';

const Header = ({ name: { first_name }, title }) => {
  return (
    <div className='header'>
      <Photo photo={photo} width='80px' height='80px' alt='member' />
      <div className='info'>
        <Title text={title} />
        <p>Hosted by {first_name}</p>
      </div>
    </div>
  )
};

Header.propTypes = {
  name: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default Header;