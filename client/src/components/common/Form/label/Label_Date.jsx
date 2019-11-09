import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import StyledLabel from './Styled_Label';
import isEmpty from '../../utils/isEmpty/isEmpty';

const LabelDate = forwardRef(({ label, value, error, onSetFocus, err }, ref) => {
  const [focus, setFocus] = useState(false);

  useImperativeHandle(ref, () => ({
    setFocusFromDate() {
      if(focus) return null;
      setFocus(true);
    }
  }))

  // Reset focus CDU
  useEffect(() => {
    if(!isEmpty(error)) {
      if(!focus) setFocus(true);
    }
    // eslint-disable-next-line
  }, [error]);
  

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });
  
  const onClickOutside = e => {
    const { className } = e.target;
    if(!focus) return null;
    if(String(className).includes('datepicker')) return null;
    setFocus(false);
  };

  const onClick = () => { 
    if(focus) return null;
    setFocus(true); 
    onSetFocus();
  };

  return (
    <StyledLabel err={err}>
      <label onClick={onClick} className={classnames('label', { 'shrink': value || error || focus })} >
        {error ? error : label}
      </label>
    </StyledLabel>
  )
})

LabelDate.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onSetFocus: PropTypes.func.isRequired,
  err: PropTypes.number.isRequired
}

export default LabelDate;
