import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Li = ({ text, isClass, onClickLi, name }) => (
  <li className={classnames('path hover', {'active' : isClass })} onClick={() => onClickLi(name)}>{text}</li>
);

Li.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.bool.isRequired,
  onClickLi: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Li;