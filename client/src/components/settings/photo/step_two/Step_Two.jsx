import React from 'react';
import PropTypes from 'prop-types';
import CropperInput from './CropperInput';
import Title from '../../../common/title/Title';

const StepTwo = ({ setImage, file }) => {
  return (
    <div className='step-two'>
      <Title text='Resize Image' />
      <div className='box'>
      {
        file.length > 0 &&
        <CropperInput  setImage={setImage} imgPreview={file[0].preview} />
      }
      </div>
    </div>
  )
}

StepTwo.propTypes = {
  setImage: PropTypes.func.isRequired,
  file: PropTypes.array.isRequired,
}

export default StepTwo;