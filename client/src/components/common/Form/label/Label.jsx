import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import StyledLabel from './Styled_Label';
import isEmpty from '../../utils/isEmpty/isEmpty';

const Label = ({ label, value, error, onSetFocus, err }) => {
  const [focus, setFocus] = useState(false);

  // Reset focus CDU
  useEffect(() => {
    if(focus) setFocus(false);
    // eslint-disable-next-line
  }, [error]);

  // Reset focus CDU
  useEffect(() => {
    if(focus && (isEmpty(value) || isEmpty(error))) return setFocus(false);
    // eslint-disable-next-line
  },[focus])

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  const onClickOutside = e => {
    const date = 'react-datepicker-ignore-onclickoutside';
    const input = 'form-input';
    const { className } = e.target;
    if(!focus) return null;
    if(className === input || date) return null;
    setFocus(false);
  };

  const onClick = () => { 
    if(focus) return null;
    setFocus(true); 
    onSetFocus();
  };

  console.log(focus)
  return (
    <StyledLabel err={err}>
      <label onClick={onClick} className={classnames('label', { 'shrink': value || error || focus })} >
        {error ? error : label}
      </label>
    </StyledLabel>
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onSetFocus: PropTypes.func.isRequired,
  err: PropTypes.bool.isRequired
}

export default Label
