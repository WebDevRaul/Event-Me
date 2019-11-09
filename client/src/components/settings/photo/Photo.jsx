import React, { useState, useEffect } from 'react';
import Title from '../../common/title/Title';

import StyledPhoto from './Styled_Photo';
import DropZone from './Drop_Zone';

const Photo = () => {
  const [file, setFile] = useState([]);

  // Clear URL CDU
  useEffect(() => {
    return () => {
      file.map(i => URL.revokeObjectURL(i.preview))
    }
  },[file])

  return (
    <StyledPhoto>
      <div className='photo'>
          <Title text='Photo Upload' />
        <div className='row no-gutters'>
          <div className='col-12 col-sm-4'>
            <div className='step-one'>
              <Title text='Step 1 - Add photo' />
              <DropZone setFile={setFile} />
            </div>
          </div>
          <div className='col-12 col-sm-4'></div>
          <div className='col-12 col-sm-4'>
            <div className='step-tree'>
              <Title text='Step 3 - Preview & Upload' />
              {file.length > 0 && 
                <img src={file[0].preview} alt='file'/>
              }
            </div>
          </div>
        </div>
      </div>
    </StyledPhoto>
  )
}

export default Photo;