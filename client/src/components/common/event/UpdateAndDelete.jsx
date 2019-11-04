import React from 'react';
import PropTypes from 'prop-types';
import ButtonOne from '../buttonOne/ButtonOne';

const UpdateAndDelete = ({ onUpdateEvt, onDeleteEvt }) => (
  <>
    <ButtonOne text='UPDATE' isClass='green' onClick={onUpdateEvt} />
    <ButtonOne text='DELETE' isClass='red' onClick={onDeleteEvt} />
  </>
);

UpdateAndDelete.propTypes = {
  onUpdateEvt: PropTypes.func.isRequired,
  onDeleteEvt: PropTypes.func.isRequired
}

export default UpdateAndDelete;