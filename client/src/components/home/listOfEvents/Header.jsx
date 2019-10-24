import React from 'react';
import photo from '../../../assets/images/questionMark.jpg';

import Title from '../../common/title/Title';
import Image from '../../common/image/Image';

const Header = () => {
  return (
    <div className='header'>
      <Image photo={photo} width='80px' height='80px' alt='member' />
      <Title text='Event tile' />
    </div>
  )
}

export default Header;