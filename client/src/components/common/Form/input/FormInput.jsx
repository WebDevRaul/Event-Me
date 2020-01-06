import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from '../../utils/isEmpty/isEmpty';

import StyledFormInput from './Styled_FormInput';

const FormInput = ({ name, label, value, onChange, onFocus, type, error }) => {  
  const err = isEmpty(error) ? false : true;
  const val = isEmpty(value) ? false : true;
  return (
    <StyledFormInput err={err} val={val}>
      <input 
        className='input'
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        autoComplete='off'
        required
      />
      <label className={classnames('label', { 'shrink': val || err })} >
        {error ? error : label}
      </label>
    </StyledFormInput>
  )
}

FormInput.defaultProps = {
  type: 'text'
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  type: PropTypes.string,
  error: PropTypes.string
}

export default FormInput;