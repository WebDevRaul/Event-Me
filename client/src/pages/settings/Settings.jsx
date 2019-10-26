import React, { useState } from 'react';

import Navigation from '../../components/settings/navigation/Navigation';
import Basic from '../../components/settings/Basic';
import About from '../../components/settings/About';
import Photo from '../../components/settings/Photo';
import Account from '../../components/settings/Account';

import StyledSettings from './Styled_Settings';

const Setting = () => {
  const [state, setState] = useState({ basic: true, about: false, photo: false, account: false });
  const { basic, about, photo, account } = state;
  const onClick = name => {
    // Find the active state
    const active = Object.entries(state).filter(([key, val]) => val !== false);
    // Flat array
    const [flattenedArr, val] = [].concat.apply([],active)
    // Return null if click on active state
    if(name === flattenedArr) return null;
    // Update new state
    setState({...state, [flattenedArr]: false, [name]: true })
  }
  return (
    <StyledSettings>
      <div className='settings'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-8'>
            { basic && <Basic /> }
            { about && <About /> }
            { photo && <Photo /> }
            { account && <Account /> }
          </div>
          <div className='col-12 col-sm-4'>
            <Navigation onClick={onClick} />
          </div>
        </div>
      </div>
    </StyledSettings>
  )
}

export default Setting;