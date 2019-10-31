import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Textarea from 'react-textarea-autosize';

import StyledTextarea from './Styled_Textarea';

const TextArea = ({ name, label, text, onChange, onFocus, error }) => {
  return (
    <StyledTextarea>
      <Textarea minRows={3} name={name} onFocus={onFocus} onChange={e => onChange(e)} value={text} />
      <span className={classnames('badge', { 'over': text.length > 50 })}>{text.length}</span>
      {/* <label className={classnames('form-input-label', { 'shrink': text || error })} >
        {error ? error : label}
      </label> */}
    </StyledTextarea>
  )
}

TextArea.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired
}

export default TextArea;