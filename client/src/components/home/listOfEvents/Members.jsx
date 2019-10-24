import React from 'react';
import Photo from '../../common/photo/Photo';
import photo from '../../../assets/images/questionMark.jpg';

const Members = () => {
  return (
    <div className='members'>
      <Photo photo={photo} width='40px' height='40px' alt='member' />
      <Photo photo={photo} width='40px' height='40px' alt='member' />
      <Photo photo={photo} width='40px' height='40px' alt='member' />
    </div>
  )
}

export default Members;