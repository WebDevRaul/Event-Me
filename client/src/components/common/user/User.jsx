import React from 'react';
import PropTypes from 'prop-types';

import StyledUser from './Styled_User';
import UserSvg from '../../../assets/svg/user';

const User = ({ isBgk, width, height }) => {
  return (
    <StyledUser>
      <div className='logo'>
        <div className='inner-logo'>
          <User width='50px' height='50px' />
        </div>
      </div>
    </StyledUser>
  )
}

User.propTypes = {
  isBgk: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
}

export default User;