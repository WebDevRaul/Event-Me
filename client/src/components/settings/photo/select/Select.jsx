import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import Buttons from './Buttons';

import StyledSelect from './Styled_Select';

const Select = ({ data: { secure_url, public_id } }) => {

  return (
    <div className='col-4'>
      <StyledSelect>
        <div className='select'>
          <div className='photo'>
            <Photo secure_url={secure_url} />
          </div>
          <Buttons secure_url={secure_url} public_id={public_id} />
        </div>
      </StyledSelect>
    </div>
  )
}

Select.propTypes = {
  secure_url: PropTypes.string,
}

export default Select;