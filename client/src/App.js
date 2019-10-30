import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Navbar from './layout/navbar/Navbar';
import EventMe from './pages/event_Me/EvenMe';
import CreateEvent from './pages/create_event/Create_Event';
import EventInfo from './pages/event_Info/Event_Info';
import Settings from './pages/settings_/Settings';
import SignIn from './pages/signIn/SignIn';
import Register from './pages/register/Register';
import NotFound from './pages/not_Found/NotFound';
import Footer from './layout/footer/Footer';

import './App.css';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route  path='/(.+)' render={() => (
            <>
              <Navbar />
              <Switch>
                <Route exact path='/event-me' component={EventMe} />
                <Route exact path='/event-me/:id' component={EventInfo} />
                <Route exact path='/create-event' component={CreateEvent} />
                <Redirect exact from ='/settings' to='/settings/basic' />
                <Route exact path='/settings/:id' component={Settings} />
                <Route exact path='/sign-in' component={SignIn} />
                <Route exact path='/register' component={Register} />
      
                <Route path='*' component={NotFound} />
              </Switch>
              <Footer />
            </>
          )} />
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App