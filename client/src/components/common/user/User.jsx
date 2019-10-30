import React from 'react';
import PropTypes from 'prop-types';

import StyledUser from './Styled_User';

const User = ({ children, isBgk }) => {
  return (
    <StyledUser isBgk={isBgk}>
      <div className='logo'>
        <div className='inner-logo'>
          { children }
        </div>
      </div>
    </StyledUser>
  )
}

User.propTypes = {
  isBgk: PropTypes.string,
  children: PropTypes.object.isRequired
}

export default User;