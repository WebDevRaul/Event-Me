import React from 'react';
import PropTypes from 'prop-types';


const Li = ({ text, isClass, onClickLi, name }) => (
  <li className={isClass} onClick={() => onClickLi(name)}>{text}</li>
);

Li.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.string.isRequired,
  onClickLi: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Li;