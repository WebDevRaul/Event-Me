import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../utils/isEmpty/isEmpty';

import Input from './Input';

import StyledRadio from './Styled_Radio';

const Status = ({ name, value, onClick, onFocus, error }) => {
  const [radio, setRadio] = useState({ 
    status_single: false, status_relationship: false, status_married: false 
  });
  const { status_single, status_relationship, status_married } = radio;
  const err = isEmpty(error) ? 0 : 1;

  // Update state CDU
  useEffect(() => {
    if(!isEmpty(value)) setRadio({ ...radio, [`status_${value}`]: true });
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
      <p>Tell us your status:</p>
      <div className='status'>
        <Input 
          name={name} 
          radio={status_single} 
          value='single' 
          onChange={onChange} 
          onClick={onClick} 
          onFocus={onFocus}
        />
        <Input 
          name={name} 
          radio={status_relationship} 
          value='relationship' 
          onChange={onChange} 
          onClick={onClick} 
          onFocus={onFocus}
        />
        <Input 
          name={name} 
          radio={status_married} 
          value='married' 
          onChange={onChange} 
          onClick={onClick}
          onFocus={onFocus} 
        />
      </div>
    </StyledRadio>
  )
};

Status.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default Status;