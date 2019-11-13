import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_main, delete_photo } from '../../../../redux/actions/profile';

import Photo from './Photo';

import StyledSelect from './Styled_Select';

const Select = ({ data: { secure_url, public_id }, set_main, delete_photo }) => {

  const onMain = () => set_main({ secure_url });

  const onDelete = () => delete_photo({ public_id });
  return (
    <div className='col-4'>
      <StyledSelect>
        <div className='select'>
          <div className='photo'>
            <Photo secure_url={secure_url} />
          </div>
          {
            public_id === 0
            ? <div className='main-photo'>Main Photo</div>
            : <div className='wrapper-box'>
                <i className='fa fa-check fa-2x' onClick={onMain}></i>
                <i className='fa fa-times fa-2x' onClick={onDelete}></i>
              </div>
          }
        </div>
      </StyledSelect>
    </div>
  )
}

Select.propTypes = {
  secure_url: PropTypes.string,
  public_id: PropTypes.number,
  set_main: PropTypes.func.isRequired,
  delete_photo: PropTypes.func.isRequired
}

export default connect(null, { set_main, delete_photo })(Select);