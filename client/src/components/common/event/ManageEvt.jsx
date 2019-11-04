import React from 'react';
import PropTypes from 'prop-types';
import ButtonOne from '../buttonOne/ButtonOne';

const ManageEvt = ({ onMenageEvt }) => (
  <ButtonOne text='MENAGE EVENT' isClass='blue' onClick={onMenageEvt} />
)

ManageEvt.propTypes = {
  onMenageEvt: PropTypes.func.isRequired
}

export default ManageEvt;