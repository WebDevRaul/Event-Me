import React, { useState, useEffect } from 'react';

import StepOne from './step_one/Step_One';
import StepTree from './step_tree/Step_Tree';
import StepTwo from './step_two/Step_Two';
import Title from '../../common/title/Title';

import StyledPhoto from './Styled_Photo';

const Photo = () => {
  const [file, setFile] = useState([]);
  const [image, setImage] = useState(null);

  // Clear URL CDU
  useEffect(() => {
    return () => {
      file.map(i => URL.revokeObjectURL(i.preview))
    }
  },[file]);


  return (
    <StyledPhoto>
      <div className='photo'>
          <Title text='Photo Upload' />
        <div className='row no-gutters'>
          <div className='col-12 col-sm-4'>
            <StepOne setFile={setFile} />
          </div>
          <div className='col-12 col-sm-4'>
            <StepTwo setImage={setImage} file={file} />
          </div>
          <div className='col-12 col-sm-4'>
            <StepTree file={file} />
          </div>
        </div>
      </div>
    </StyledPhoto>
  )
}

export default Photo;