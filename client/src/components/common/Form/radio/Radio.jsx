import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

import StyledRadio from './Styled_Radio';

const Radio = ({ onClick }) => {
  const [radio, setRadio] = useState(false);
  const onChange = () => setRadio(!radio);
  return (
    <StyledRadio>
      <Input gender='M' value='Male' radio={radio} onClick={onClick} onChange={onChange} />
      <Input gender='F' value='Female' radio={!radio} onClick={onClick} onChange={onChange} />
    </StyledRadio>
  )
}

Radio.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Radio;