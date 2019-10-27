import React from 'react';
import Person from './Person';

const arr = ['Valentina', 'Marius', 'Tom']

const SideBar = () => {
  return (
    <div className='side-bar'>
      <div className="top">
        <p>{arr.length} People Going</p>
        {/* Be first to go */}
      </div>
      <div className="bottom">
        {arr.map((name, i) => <Person name={name} key={i} /> )}
      </div>
    </div>
  )
}

export default SideBar;