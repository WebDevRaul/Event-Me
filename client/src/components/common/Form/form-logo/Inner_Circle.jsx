import React from 'react';
import PropTypes from 'prop-types';

const InnerCircle = ({ children }) => {
  return (
    <div className='logo'>
      <div className='inner-logo'>
        { children }
      </div>
    </div>
  )
};

InnerCircle.propTypes = {
  children: PropTypes.object.isRequired
}

export default InnerCircle;