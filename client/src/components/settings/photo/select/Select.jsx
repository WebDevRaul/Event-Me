import React from 'react';
import PropTypes from 'prop-types';

import StyledSelect from './Styled_Select';
import Photo from './Photo';

const Select = ({ url, main }) => {
  return (
    <div className='col-4'>
      <StyledSelect>
        <div className='select'>
          <div className='photo'>
            <Photo url={url} />
          </div>
          {
            main === 'true'
            ? <div className='main-photo'>Main Photo</div>
            : <div className='wrapper-box'>
                <i className='fa fa-check fa-2x' onClick={() => {}}></i>
                <i className='fa fa-times fa-2x' onClick={() => {}}></i>
              </div>
          }
        </div>
      </StyledSelect>
    </div>
  )
}

Select.propTypes = {
  url: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired
}

export default Select;