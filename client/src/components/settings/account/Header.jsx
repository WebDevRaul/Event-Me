import React from 'react';
import PropTypes from 'prop-types';
import differenceInYears from 'date-fns/differenceInYears';
import isEmpty from '../../common/utils/isEmpty/isEmpty';

import Photo from '../../common/user/Photo';
import Title from '../../common/title/Title';

const Header = ({ photo, name, ocupation, country, birthday }) => {
  const age = !isEmpty(birthday) ? differenceInYears(Date.now(), new Date(birthday)) : 'unknown age';
  return (
    <div className='header'>
      <div className='photo'>
        <Photo photo={photo} width='100px' height='100px' alt='name' />
      </div>
      <div className='info'>
        <Title text={name} />
        <p>{ocupation}</p>
        <p>{age} y<span>{country}</span></p>
      </div>
    </div>
  )
}

Header.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ocupation: PropTypes.string.isRequired,
}

export default Header
