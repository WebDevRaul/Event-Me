import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Select from 'react-select';
import isEmpty from '../../utils/isEmpty/isEmpty';
import { options, style } from './data';

import StyledMultiSelect from './Styled_Multi_select';


const MultiSelect = ({ value, label, onChange, error }) => {
  return (
    <StyledMultiSelect>
      <div className='select'>
        <Select 
          options={options}
          styles={style}
          closeMenuOnSelect={false}
          isMulti
          placeholder={false}
          onChange={val => onChange(val)}
        />
        <label className={classnames('label', { 'shrink': error || !isEmpty(value) })} >
          {error ? error : label}
        </label>
      </div>
    </StyledMultiSelect>
  )
}

MultiSelect.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}

export default MultiSelect;
