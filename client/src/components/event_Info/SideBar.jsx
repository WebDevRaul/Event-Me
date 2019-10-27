import React from 'react';
import PropTypes from 'prop-types';

import Person from './Person';

const SideBar = ({ arr }) => {
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
        {arr.map((person, i) => <Person person={person} key={i} /> )}
      </div>
    </div>
  )
}

SideBar.propTypes = {
  arr: PropTypes.array.isRequired
}

export default SideBar;