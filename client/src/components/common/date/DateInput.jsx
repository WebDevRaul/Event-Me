import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import StyledDateInput from './Styled_DateInput';
import isEmpty from '../utils/isEmpty/isEmpty';

const DateInput = ({ onChange, value, error, onFocus }) => {
  const [focus, setFocus] = useState(0);
  const val = !isEmpty(value) ? 1 : 0;
  const err = isEmpty(error) ? 1 : 0;
  useEffect(() => {
    if(focus) { document.addEventListener("", onClickOutside) }
    else { document.removeEventListener('', onClickOutside) }
    return () => document.removeEventListener('', onClickOutside)
  },[focus]);

  const onClickOutside = () => setFocus(0);
  const onFocusDatePicker = e => {
    setFocus(1);
    onFocus(e);
  };

  return (
    <StyledDateInput focus={focus} val={val} err={err}>
      <DatePicker
        name='date' 
        onChange={onChange}
        selected={value ? new Date(value) : null}
        showTimeSelect
        dateFormat='dd LLL yyyy h:mm a'
        timeFormat='HH:mm'
        onFocus={e => onFocusDatePicker(e)}
        autoComplete='off'
        onChangeRaw={e => e.preventDefault()}
      />
      <label>{error ? error : 'Date'}</label>
    </StyledDateInput>
  )
};

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onFocus: PropTypes.func.isRequired
};

export default DateInput;