import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import Register from './pages/register/Register';
import NotFound from './pages/notFound/NotFound';
import Footer from './layout/footer/Footer';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/register' component={Register} />

          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App