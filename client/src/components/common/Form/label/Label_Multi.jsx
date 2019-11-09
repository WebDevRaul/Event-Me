import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import isEmpty from '../../utils/isEmpty/isEmpty';

import StyledLabel from './Styled_Label';

const LabelMulti = forwardRef(({ label, value, error, onSetFocus, err }, ref) => {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if(focus && isEmpty(value)) setFocus(false);
  },[value])

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  useImperativeHandle(ref, () => ({
    setFocusFromMultiSelect() {
      if(focus) return null;
      setFocus(true);
    }
  }))

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
      <label onClick={onClick} className={classnames('label', { 'shrink': !isEmpty(value) || focus || !isEmpty(error) })} >
        {error ? error : label}
      </label>
    </StyledLabel>
  )
})

LabelMulti.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  error: PropTypes.string,
  onSetFocus: PropTypes.func.isRequired,
  err: PropTypes.number.isRequired
}

export default LabelMulti;
