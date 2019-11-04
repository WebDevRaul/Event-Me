import React from 'react';
import PropTypes from 'prop-types';
import ButtonOne from '../buttonOne/ButtonOne';

const EditAndDelete = ({ onEditEvt, onDeleteEvt }) => (
  <>
    <ButtonOne text='EDIT' isClass='blue' onClick={onEditEvt} />
    <ButtonOne text='DELETE' isClass='red' onClick={onDeleteEvt} />
  </>
);

EditAndDelete.propTypes = {
  onEditEvt: PropTypes.func.isRequired,
  onDeleteEvt: PropTypes.func.isRequired
}

export default EditAndDelete;