import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import SideNav from '../../components/settings/side_nav/SideNav';
import Basic from '../../components/settings/Basic';
import About from '../../components/settings/About';
import Photo from '../../components/settings/Photo';
import Account from '../../components/settings/Account';

import StyledSettings from './Styled_Settings';

const Setting = ({ match }) => {
  return (
    <StyledSettings>
      <div className='settings'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-8'>
            <Switch>
              <Route exact path='/settings/basic' component={Basic} />
              <Route exact path='/settings/about' component={About} />
              <Route exact path='/settings/photo' component={Photo} />
              <Route exact path='/settings/account' component={Account} />
            </Switch>
          </div>
          <div className='col-12 col-sm-4'>
            <SideNav match={match}/>
          </div>
        </div>
      </div>
    </StyledSettings>
  )
}

Setting.propTypes = {
  match: PropTypes.object.isRequired
}

export default Setting;