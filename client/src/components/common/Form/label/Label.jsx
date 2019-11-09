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
  


  const onClickOutside = () => {
    if(!focus) return null;
    setFocus(false);
  };

  const onClick = () => { 
    if(focus) return null;
    setFocus(true); 
    onSetFocus();
  };


  return (
    <StyledLabel err={err}>
      <label onClick={onClick} className={classnames('label', { 'shrink': !isEmpty(value) || !isEmpty(error) || focus })} >
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
  err: PropTypes.number.isRequired
}

export default Label
