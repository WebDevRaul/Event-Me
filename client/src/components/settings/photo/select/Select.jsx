import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_main } from '../../../../redux/actions/profile';

import Photo from './Photo';

import StyledSelect from './Styled_Select';

const Select = ({ url, main, public_id, set_main }) => {

  const onMain = () => set_main({ secure_url: url, main: 'true', public_id });

  const onDelete = () => {}
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
  url: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  public_id: PropTypes.string,
  set_main: PropTypes.func.isRequired
}

export default connect(null, { set_main })(Select);