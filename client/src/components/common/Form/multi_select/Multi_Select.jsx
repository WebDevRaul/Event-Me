import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Select from 'react-select';
import isEmpty from '../../utils/isEmpty/isEmpty';
import { options, style } from './data';

import StyledMultiSelect from './Styled_Multi_select';


const MultiSelect = ({ value, label, onChange, error }) => {
  const [focus, setFocus] = useState(false);
  const [menu, setMenu] = useState(false);
  const outsideRef = React.useRef();

  // Update Textarea focus CDU
  useEffect(() => {
    if(focus) { outsideRef.current.focus(); setMenu(true); } 
  }, [focus]);
  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  const onClickOutside = () => { if(focus) { setFocus(false); setMenu(false) } }

  // const onChangeAndMap = val => {
  //   console.log(val)
  //   // const result = [];
  //   // if(isEmpty(val)) return null;
  //   // val.map(({ value }) => result.push(value) );
  //   onChange(val)
  // }

  const onClick = () => setFocus(!focus);

  return (
    <StyledMultiSelect>
      <div className='select' onClick={onClick}>
        <Select 
          options={options}
          styles={style}
          closeMenuOnSelect={false}
          isMulti
          menuIsOpen={menu}
          name='select'
          placeholder={false}
          onChange={val => console.log(val)}
          ref={outsideRef}
        />
        <label className={classnames('label', { 'shrink': focus || error })} >
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
