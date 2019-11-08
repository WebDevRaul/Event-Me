import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StyledInput from './Styled_Input';

const Input = ({ name, label, value, onChange, onFocus, type, error }) => {
  const [focus, setFocus] = useState(false);
  const input = React.useRef();

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  // Update input focus CDU
  useEffect(() => {
    if(focus) input.current.focus();
  }, [focus]);

  const handleClickOutside = () => {
    if(!(value || error) && focus) setFocus(false); 
  };

  const onClick = () => setFocus(!focus);
  
  return (
    <StyledInput>
      <input 
        className={classnames('form-input', {'validate' : error})}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        autoComplete='off'
        required
        ref={input}
      />
      <label onClick={onClick} className={classnames('form-input-label', { 'shrink': value || error || focus })} >
        {error ? error : label}
      </label>
    </StyledInput>
  )
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  type: PropTypes.string,
  error: PropTypes.string
}

export default Input;