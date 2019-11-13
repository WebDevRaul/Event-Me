import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { upload_photo } from '../../../../redux/actions/profile';
import Title from '../../../common/title/Title';

const StepTree = ({ file, image, setFile, setImage, upload_photo }) => {

  const onSubmit = () => {
    upload_photo({ image });
    onClearState();
  }

  const onClearState = () => {
    setFile([]);
    setImage(null);
  }

  const onCancel = () => onClearState();

  return (
    <div className='step-tree'>
      <Title text='Step 3 - Preview & Upload' />
      <div className='box'>
      {
        file.length > 0 && 
        <>
          <div className='img-preview' />
          <div className='wrapper-box'>
            <i className='fa fa-check fa-2x' onClick={onSubmit}></i>
            <i className='fa fa-times fa-2x' onClick={onCancel}></i>
          </div>
        </>
      }
      </div>
    </div>
  )
}

StepTree.propTypes = {
  file: PropTypes.array.isRequired,
  image: PropTypes.object,
  setFile: PropTypes.func.isRequired,
  setImage: PropTypes.func.isRequired,
  upload_photo: PropTypes.func.isRequired
}

export default connect(null, { upload_photo })(StepTree);