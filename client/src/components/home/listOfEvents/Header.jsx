import React from 'react';
import PropTypes from 'prop-types';
import photo from '../../../assets/images/questionMark.jpg';

import Title from '../../common/title/Title';
import Photo from '../../common/photo/Photo';
import SubTitle from '../../common/subTitle/SubTitle';

const Header = ({ name }) => {
  return (
    <div className='header'>
      <Photo photo={photo} width='80px' height='80px' alt='member' />
      <div className='info'>
        <Title text='Event tile' />
        <SubTitle text={`Hosted by ${name}`} />
      </div>
    </div>
  )
};

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header;