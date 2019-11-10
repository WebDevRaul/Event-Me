import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';
import Title from '../../../common/title/Title';

const DropZone = ({ setFile }) => {
  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles.map(file => Object.assign(file, { 
      preview: URL.createObjectURL(file)
     })))
    // eslint-disable-next-line
  },[]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*'
  })
  return (
    <div className={classnames('dropzone', { 'is-active':isDragActive })} {...getRootProps()}>
      <input {...getInputProps()} />
      <i className='fas fa-rotate-90 fa-sign-in-alt fa-3x'></i>
      <Title text='Drop image here...' />
    </div>
  )
}

DropZone.propTypes = {
  setFile: PropTypes.func.isRequired
}

export default DropZone;
