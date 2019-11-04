import React from 'react';
import ButtonOne from '../buttonOne/ButtonOne';

const EditAndDelete = () => {

  const onEditEvt = () => {}
  const onDeleteEvt = () => {}
  
  return (
    <>
      <ButtonOne text='EDIT' isClass='blue' onClick={onEditEvt} />
      <ButtonOne text='DELETE' isClass='red' onClick={onDeleteEvt} />
    </>
  )
}

export default EditAndDelete;