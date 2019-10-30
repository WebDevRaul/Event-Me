import React from 'react';
import PropTypes from 'prop-types';

import StyledUser from './Styled_User';
import FaceBook from '../../../assets/svg/Facebook';

const User = ({ isBgk, width, height }) => {
  return (
    <StyledUser isBgk={isBgk}>
      <div className='logo'>
        <div className='inner-logo'>
          <FaceBook width={width} height={height} />
        </div>
      </div>
    </StyledUser>
  )
}

User.propTypes = {
  isBgk: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
}

export default User;