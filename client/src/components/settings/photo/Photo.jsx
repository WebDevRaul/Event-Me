import React, { useState, useEffect } from 'react';
import Title from '../../common/title/Title';

import StyledPhoto from './Styled_Photo';
import DropZone from './Drop_Zone';
import CropperInput from './CropperInput';

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
            <div className='step-one'>
              <Title text='Step 1 - Add photo' />
              <div className='box'>
                <DropZone setFile={setFile} />
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-4'>
            <div className='step-two'>
              <Title text='Resize Image' />
              <div className='box'>
              {
                file.length > 0 &&
                <CropperInput  setImage={setImage} imgPreview={file[0].preview} />
              }
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-4'>
            <div className='step-tree'>
              <Title text='Step 3 - Preview & Upload' />
              <div className='box'>
              {
                file.length > 0 && 
                <div className='img-preview' />
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledPhoto>
  )
}

export default Photo;