import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_main, delete_photo } from '../../../../redux/actions/profile';

const Buttons = ({ secure_url, public_id, set_main, delete_photo }) => {

  const onMain = () => set_main({ secure_url });

  const onDelete = () => delete_photo({ public_id });

  return (
    <>
      {
        public_id !== '0'
        ? public_id !== '1'
          ? <div className='wrapper-box'>
              <i className='fa fa-check fa-2x' onClick={onMain}></i>
              <i className='fa fa-times fa-2x' onClick={onDelete}></i>
            </div>
          : <div className='main-photo' onClick={onMain}>Set Default</div>
        : <div className='main-photo'>Main Photo</div>
      }
    </>
  )
}

Buttons.propTypes = {
  public_id: PropTypes.string.isRequired,
  set_main: PropTypes.func.isRequired,
  delete_photo: PropTypes.func.isRequired
}

export default connect(null, { set_main, delete_photo })(Buttons);