import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import jwt_decode from 'jwt-decode';
import { setAuthToken, setCurrentUser, sign_out } from './redux/actions/user';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ReduxToastr from 'react-redux-toastr';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

// Check Token
if (localStorage.jwToken) {
  const { jwToken } = localStorage;
  const { exp } = jwt_decode(jwToken);
  const time = Date.now() / 1000;

  // Sign-In user
  setAuthToken(jwToken);
  store.dispatch(setCurrentUser(jwToken));

  // Sign-Out user
  if(exp < time) store.dispatch(sign_out());
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <ScrollToTop>
          <ReduxToastr position='bottom-right' transitionIn='fadeIn' transitionOut='fadeOut' />
          <App />
        </ScrollToTop>
      </Router>
    </PersistGate>
  </Provider>  , document.getElementById('root'));

serviceWorker.unregister();