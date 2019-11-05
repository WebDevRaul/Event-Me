import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Landing from './pages/landing/Landing';
import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import CreateEvent from './pages/create_event/Create_Event';
import EventInfo from './pages/event_info/Event_Info';
import Settings from './pages/settings_/Settings';
import MyEvents from './pages/my_events/My_Events';
import ManageEvent from './pages/manage_event/Manage_Event';
import SignIn from './pages/signIn/SignIn';
import Register from './pages/register/Register';
import NotFound from './pages/not_Found/NotFound';
import Footer from './layout/footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Route exact path='/' component={Landing} />
      <Route  path='/(.+)' render={() => (
        <>
          <Navbar />
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/home/:id' component={EventInfo} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/register' component={Register} />

            <PrivateRoute exact component={CreateEvent}
              path={['/create-event','/home/:id/manage-event/update','/my-events/:id/manage-event/update']} />
            <PrivateRoute exact path={['/home/:id/manage-event','/my-events/:id/manage-event']} component={ManageEvent} />
            <PrivateRoute exact path='/my-events' component={MyEvents} />
            
            <Redirect exact from ='/settings' to='/settings/basic' />
            <PrivateRoute exact path='/settings/:id' component={Settings} />
  
            <Route path='*' component={NotFound} />
          </Switch>
          <Footer />
        </>
      )} />
    </div>
  )
}

export default App