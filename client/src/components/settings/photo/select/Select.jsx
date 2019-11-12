import React from 'react';
import PropTypes from 'prop-types';

import StyledSelect from './Styled_Select';
import Photo from './Photo';

const Select = () => {
  return (
    <StyledSelect>
      <div className='select'>
        <div className='photo'>
          <Photo url='' />
        </div>
        <div className='wrapper-box'>
          <i className='fa fa-check fa-2x' onClick={() => {}}></i>
          <i className='fa fa-times fa-2x' onClick={() => {}}></i>
        </div>
      </div>
    </StyledSelect>
  )
}

Select.propTypes = {

}

export default Select;