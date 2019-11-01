import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../isEmpty/isEmpty';

import Person from './Person';

const Members = ({ arr }) => {
  return (
    <div className='side-bar'>
      <div className="top">
        {
          arr.length > 0
            ? <p>{arr.length} People Going</p>
            : <p>Be first to go</p>
        }
      </div>
      <div className="bottom">
        {!isEmpty(arr) && arr.map((person, i) => <Person person={person} key={i} /> )}
      </div>
    </div>
  )
}

Members.propTypes = {
  arr: PropTypes.array.isRequired
}

export default Members;