import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { options, style } from './data';
import LabelMulti from '../label/Label_Multi';
import isEmpty from '../../utils/isEmpty/isEmpty';

import StyledMultiSelect from './Styled_Multi_select';


const MultiSelect = ({ value, label, onChange, onFocus, error }) => {
  const input = useRef();
  const child = useRef();
  const err = isEmpty(error) ? 0 : 1;

  // Reset focus CDU
  useEffect(() => {
    if(isEmpty(value)) {
      input.current.blur();
    }
  }, [value])

  const onSetFocus = () => {
    input.current.focus();
    input.current.onMenuOpen();
  }

  const onFocusMultiSelect = e => {
    child.current.setFocusFromMultiSelect();
    onFocus(e)
  }

  return (
    <StyledMultiSelect err={err}>
      <div className='select'>
        <Select 
          options={options}
          styles={style}
          closeMenuOnSelect={false}
          isMulti
          placeholder={false}
          components={
            {
              IndicatorsContainer: () => null
            }
          }
          ClearIndicator={false}
          onChange={val => onChange(val)}
          onFocus={e => onFocusMultiSelect(e)}
          ref={input}
        />
        <LabelMulti
          isClass='label' 
          value={value} 
          label={label} 
          error={error} 
          onSetFocus={onSetFocus} 
          err={err}
          ref={child}
        />
      </div>
    </StyledMultiSelect>
  )
}

MultiSelect.propTypes = {
  value: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}

export default MultiSelect;
