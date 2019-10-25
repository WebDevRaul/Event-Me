import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StyledInput from './Styled_Input';

const Input = ({ name, label, value, onChange, onFocus, type, error }) => {
  return (
    <StyledInput>
      <input 
        className={classnames('form-input', {'validate' : error})}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        autoComplete='true'
        required
      />
      <label className={classnames('form-input-label', { 'shrink': value })} >
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