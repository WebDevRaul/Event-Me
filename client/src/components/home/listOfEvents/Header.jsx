import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../common/title/Title';
import Photo from '../../common/photo/Photo';

const Header = ({ author: { first_name }, title }) => {
  return (
    <div className='header'>
      <Photo photo={undefined} width='80px' height='80px' alt='member' />
      <div className='info'>
        <Title text={title} />
        <p>Hosted by {first_name}</p>
      </div>
    </div>
  )
};

Header.propTypes = {
  author: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default Header;