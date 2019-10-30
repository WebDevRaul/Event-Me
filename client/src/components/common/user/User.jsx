import React from 'react';
import PropTypes from 'prop-types';

import StyledUser from './Styled_User';
import AddUserSvg from '../../../assets/svg/AddUserSvg';

const User = ({ isBgk, width, height }) => {
  return (
    <StyledUser isBgk={isBgk}>
      <div className='logo'>
        <div className='inner-logo'>
          <AddUserSvg width={width} height={height} />
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