import React from 'react';
import PropTypes from 'prop-types';
import DropZone from './Drop_Zone';
import Title from '../../../common/title/Title';

const StepOne = ({ setFile }) => {
  return (
    <div className='step-one'>
      <Title text='Step 1 - Add photo' />
      <div className='box'>
        <DropZone setFile={setFile} />
      </div>
    </div>
  )
}

StepOne.propTypes = {
  setFile: PropTypes.func.isRequired
}

export default StepOne;