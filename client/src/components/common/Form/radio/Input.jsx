import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, value, radio, onChange, onClick, onFocus }) => (
  <>
    <label htmlFor={name}>{value}</label>
    <input name={name} value={value} checked={radio} onChange={e => onChange(e)} onClick={e => onClick(e)} 
      onFocus={onFocus} type='radio' />
  </>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  radio: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Input