import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import Settings from './pages/user_Settings/Settings';
import SignIn from './pages/signIn/SignIn';
import Register from './pages/register/Register';
import NotFound from './pages/not_Found/NotFound';
import Footer from './layout/footer/Footer';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Landing} />
        <Route  path='/(.+)' render={() => (
          <>
            <Navbar />
            <Switch>
              <Route exact path='/event-me' component={Home} />
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
    </Router>
  )
}

export default App