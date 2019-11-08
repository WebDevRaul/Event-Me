import React from 'react'
import PropTypes from 'prop-types';
import Select from 'react-select';

import { options, style } from './data';

const MultiSelect = props => {
  return (
    <div onClick={e => console.log(e.target)}>
        <Select 
          options={options}
          styles={style}
          closeMenuOnSelect={false}
          isMulti
          name='select'
          placeholder={false}
          onChange={e => console.log(e)}
          // value={{value: 'red', label: 'red', style:{color: 'red'}}}
        />
    </div>
  )
}

MultiSelect.propTypes = {

}

export default MultiSelect;
