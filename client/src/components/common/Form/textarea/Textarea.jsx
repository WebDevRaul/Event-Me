import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Textarea from 'react-textarea-autosize';

import StyledTextarea from './Styled_Textarea';

const TextArea = ({ name, label, text, onChange, onFocus, error }) => {
  const [focus, setFocus] = useState(false);
  const [state, setState] = useState({ row: 1, shrink: 0 });
  const { row, shrink } = state;
  const outsideRef = React.createRef();
  const input = React.useRef();

  // Create Event CDM && CDUM
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

   // Update Textarea focus CDU
   useEffect(() => {
     if(focus) outsideRef.current._ref.focus();
     // eslint-disable-next-line
  }, [focus]);

  const handleClickOutside = e => {
    const { current } = outsideRef;
    if(current === null) return null;
    if(e.target.className !== 'ref' && !shrink && !text.length < 50) return null;
    if(e.target.className === 'ref' && shrink) return null;
    setState({ row: 1, shrink: 0 });
    setFocus(false);
  };

  const onClick = () => setFocus(!focus);
  const onFocusTextarea = () => { if(row === 1) setState({ row: 3, shrink: 1 }) };

  return (
    <StyledTextarea>
      <div onFocus={onFocus} ref={input}>
        <Textarea 
          className={classnames('ref', {'validate' : error})}
          name={name} 
          value={text}
          minRows={row} 
          onChange={e => onChange(e)} 
          onFocus={onFocusTextarea}
          ref={outsideRef}
        />
        <span className={classnames('badge', {'d-none': !shrink, 'over': text.length > 500 })}>{text.length}</span>
        <label onClick={onClick} className={classnames('label', { 'shrink': text || error || focus })} >
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