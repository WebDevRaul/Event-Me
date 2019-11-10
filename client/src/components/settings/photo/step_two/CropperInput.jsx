import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Cropper from 'react-cropper';

import 'cropperjs/dist/cropper.css';

const CropperInput = ({ imgPreview, setImage }) => {
  const cropper = useRef();

  const toCropImage = () => {
    if(typeof cropper.current.getCroppedCanvas() === 'undefined') return ;
    cropper.current.getCroppedCanvas().toBlob(blob => {setImage(blob)}, 'image/jpeg')
  }
  return (
    <Cropper 
      ref={cropper}
      src={imgPreview}
      style={{ height: '100%', width: '100%' }}
      preview='.img-preview'
      aspectRatio={1}
      viewMode={1}
      dragMode='move'
      guides={false}
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      crop={toCropImage}
    />
  )
}

CropperInput.propTypes = {

}

export default CropperInput;