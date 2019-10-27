import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


const Li = ({ text, url, name }) => {
  const active = String(url).endsWith(name);
  return (
    <Link to={`/settings/${name}`}>
      <li className={classnames('path', {'active' : active })}>{text}</li>
    </Link>
  )
}

Li.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Li;