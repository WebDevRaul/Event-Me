import React from 'react';
import PropTypes from 'prop-types';
import ButtonOne from '../buttonOne/ButtonOne';

const ManageEvt = ({ onMenageEvent }) => (
  <ButtonOne text='MENAGE EVENT' isClass='blue' onClick={onMenageEvent} />
)

ManageEvt.propTypes = {
  onMenageEvent: PropTypes.func.isRequired
}

export default ManageEvt;