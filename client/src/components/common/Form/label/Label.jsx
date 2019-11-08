import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Label = ({ label, value, error, onSetFocus }) => {
  const [focus, setFocus] = useState(false);

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  const onClickOutside = () => {
    if(!(value || error) && focus) setFocus(false);
  };

  const onClick = () => { setFocus(!focus); onSetFocus() };

  return (
    <label onClick={onClick} className={classnames('form-input-label', { 'shrink': value || error || focus })} >
      {error ? error : label}
    </label>
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onSetFocus: PropTypes.func.isRequired
}

export default Label
