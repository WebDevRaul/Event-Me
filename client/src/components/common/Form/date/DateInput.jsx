import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../utils/isEmpty/isEmpty';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import StyledDateInput from './Styled_DateInput';

const DateInput = ({ 
  name, value, label, onChange, onFocus, error, date, showTime, time, year, month, mode, maxDate 
}) => {
  const [focus, setFocus] = useState(0);
  const val = !isEmpty(value) ? 1 : 0;
  const err = isEmpty(error) ? 1 : 0;
  useEffect(() => {
    if(focus) { document.addEventListener('mousedown', onClickOutside) }
    else { document.removeEventListener('mousedown', onClickOutside) }
    return () => document.removeEventListener('mousedown', onClickOutside)
  },[focus]);

  const onClickOutside = () => setFocus(0);
  const onFocusDatePicker = e => {
    setFocus(1);
    onFocus(e);
  };

  return (
    <StyledDateInput focus={focus} val={val} err={err}>
      <DatePicker
        name={name} 
        selected={value ? new Date(value) : null}
        onChange={onChange}
        onFocus={e => onFocusDatePicker(e)}
        autoComplete='off'
        onChangeRaw={e => e.preventDefault()}
        dateFormat={date}
        showTimeSelect={showTime}
        timeFormat={time}
        showYearDropdown={year}
        showMonthDropdown={month}
        dropdownMode={mode}
        maxDate={maxDate}
      />
      <label>{error ? error : label}</label>
    </StyledDateInput>
  )
};

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  error: PropTypes.string,
  date: PropTypes.string.isRequired,
  showTime: PropTypes.bool,
  time: PropTypes.string,
  year: PropTypes.bool,
  month: PropTypes.bool,
  mode: PropTypes.string,
  maxDate: PropTypes.object
};

export default DateInput;