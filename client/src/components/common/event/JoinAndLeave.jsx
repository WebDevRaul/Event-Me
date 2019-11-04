import React from 'react';
import PropTypes from 'prop-types';
import ButtonOne from '../buttonOne/ButtonOne';

const JoinAndLeave = ({ isJoined, isAuth, onJoinEvt, onLeaveEvt }) => {
  return (
    <>
      { 
        !isJoined
        ?  <ButtonOne text='JOIN THIS EVENT' isClass='blue' onClick={onJoinEvt} />
        :  isAuth 
          ?  isJoined
              ? <ButtonOne text='LEAVE THIS EVENT' isClass='red' onClick={onLeaveEvt} /> : null
          :  <ButtonOne text='JOIN THIS EVENT' isClass='blue' onClick={onJoinEvt} />
      }

    </>
  )
}

JoinAndLeave.propTypes = {
  isJoined: PropTypes.number.isRequired,
  isAuth: PropTypes.bool.isRequired,
  onJoinEvt: PropTypes.func.isRequired,
  onLeaveEvt: PropTypes.func.isRequired
}

export default JoinAndLeave;