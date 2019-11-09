import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import LabelDate from '../label/Label_Date';
import isEmpty from '../../utils/isEmpty/isEmpty';

import 'react-datepicker/dist/react-datepicker.css';
import StyledDateInput from './Styled_DateInput';

const DateInput = ({ 
  name, value, label, onChange, onFocus, error, date, showTime, time, year, month, mode, maxDate 
}) => {
  const input = useRef();
  const child = useRef();
  const err = isEmpty(error) ? 0 : 1;

  const onFocusDatePicker = e => { 
    onFocus(e);
    child.current.setFocusFromDate();
   }
  const onSetFocus = () => input.current.setFocus();

  return (
    <StyledDateInput err={err}>
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
        ref={input}
      />
      <LabelDate 
        isClass='label' 
        label={label} 
        value={value} 
        error={error} 
        onSetFocus={onSetFocus} 
        err={err}
        ref={child}
      />
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