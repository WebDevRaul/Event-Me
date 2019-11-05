import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as ToastrReducer } from 'react-redux-toastr';

import user from './user';
import eventMe from './event';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};


const rootReducer =  combineReducers({
  eventMe,
  user,
  toastr: ToastrReducer
});

export default persistReducer(persistConfig, rootReducer);