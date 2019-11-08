import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from '../../utils/isEmpty/isEmpty';
import Textarea from 'react-textarea-autosize';
import Label from '../label/Label';

import StyledTextarea from './Styled_Textarea';

const TextArea = ({ name, label, text, onChange, onFocus, error }) => {
  const [state, setState] = useState({ row: 1, shrink: 0 });
  const { row, shrink } = state;
  const err = isEmpty(error) ? 0 : 1;
  const input = useRef();

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  const onClickOutside = e => {
    const { current } = input;
    if(current === null) return null;
    if(e.target.className !== 'area' && !shrink && !text.length < 50) return null;
    if(e.target.className === 'area' && shrink) return null;
    setState({ row: 1, shrink: 0 });
  };

  const onSetFocus = () => input.current._ref.focus();
  const onFocusTextarea = () => { if(row === 1) setState({ row: 3, shrink: 1 }) };

  return (
    <StyledTextarea>
      <div onFocus={onFocus}>
        <Textarea 
          className={classnames('area', {'validate' : error})}
          name={name} 
          value={text}
          minRows={row} 
          onChange={e => onChange(e)} 
          onFocus={onFocusTextarea}
          ref={input}
        />
        <span className={classnames('badge', {'d-none': !shrink, 'over': text.length > 500 })}>{text.length}</span>
        <Label 
          isClass='label' 
          label={label} 
          value={text} 
          error={error} 
          onSetFocus={onSetFocus} 
          err={err}
        />
      </div>
    </StyledTextarea>
  )
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default TextArea;