import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as ToastrReducer } from 'react-redux-toastr';

import eventMe from './event';
import user from './user';
import error from './error';
import loading from './loading';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};


const rootReducer =  combineReducers({
  eventMe,
  user,
  error,
  loading,
  toastr: ToastrReducer
});

export default persistReducer(persistConfig, rootReducer);