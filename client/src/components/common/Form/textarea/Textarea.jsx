import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Textarea from 'react-textarea-autosize';

import StyledTextarea from './Styled_Textarea';

const TextArea = ({ name, label, text, onChange, onFocus, error }) => {
  const [state, setState] = useState({ row: 1, focus: 0 });
  const { row, focus } = state;
  const outsideRef = React.createRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClickOutside = e => {
    const { current } = outsideRef;
    if(current === null) return null;
    if(e.target.className !== 'ref' && !focus && !text.length < 50) return null;
    if(e.target.className === 'ref' && focus) return null;
    setState({ row: 1, focus: 0 })
  };

  const onFocusTextarea = () => { if(row === 1) setState({ row: 3, focus: 1 }) };

  return (
    <StyledTextarea focus={focus}>
      <div onFocus={onFocus}>
        <Textarea 
          className={classnames('ref', {'validate' : error})}
          minRows={row} 
          ref={outsideRef}
          name={name} 
          value={text}
          onChange={e => onChange(e)} 
          onFocus={onFocusTextarea}
        />
        <span className={classnames('badge', {'d-none': !focus, 'over': text.length > 500 })}>{text.length}</span>
        <label className={classnames('label', { 'shrink': text || error })} >
          {error ? error : label}
        </label>
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