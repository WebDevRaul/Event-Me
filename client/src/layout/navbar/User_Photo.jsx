import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../components/common/photo/Photo';
import UserSvg from '../../assets/svg/UserSvg';

const UserPhoto = ({ photo }) => {
  return (
    <>
      {
        photo
          ? <Photo photo={photo} width='25px' height='25px' alt='User' />
          : <UserSvg width='25px' height='25px' alt='User' />
      }
    </>
  )
}

UserPhoto.propTypes = {
  photo: PropTypes.object
}

export default UserPhoto;