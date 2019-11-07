import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../utils/isEmpty/isEmpty';

import Input from './Input';

import StyledRadio from './Styled_Radio';

const Gender = ({ value, name, onClick, error, onFocus }) => {
  const [radio, setRadio] = useState({gender_male: false, gender_female: false});
  const { gender_male, gender_female } = radio;
  const err = error ? 1 : 0;

  // CDU
  useEffect(() => {
    if(!isEmpty(value)) setRadio({ ...radio, [`gender_${value}`]: true });
    // eslint-disable-next-line
  },[value])

  const onChange = e => {
    const { name, value } = e.target
    // Find the active state
    const active = Object.entries(radio).filter(([key, val]) => val !== false);
    if(isEmpty(active)) return setRadio({ ...radio, [`${name}_${value}`]: true });
    // Flat array
    const [flattenedArr] = [].concat.apply([],active);
    // Update new state
    setRadio({...radio, [flattenedArr]: false, [`${name}_${value}`]: true });
  };
  return (
    <StyledRadio err={err}>
      <div className='gender'>
        <span>{error}</span>
        <Input name={name} radio={gender_male} value='male' onChange={onChange} onClick={onClick} onFocus={onFocus}/>
        <Input name={name} radio={gender_female} value='female' onChange={onChange} onClick={onClick} onFocus={onFocus} />
      </div>
    </StyledRadio>
  )
}

Gender.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default Gender;