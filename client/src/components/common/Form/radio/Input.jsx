import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ gender, value, radio, onClick, onChange }) => (
  <>
    <label htmlFor={gender}>{value}</label>
    <input name='gender' value={value} checked={radio} onClick={e => onClick(e)} onChange={onChange} type='radio' />
  </>
);

Input.propTypes = {
  gender: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  radio: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input