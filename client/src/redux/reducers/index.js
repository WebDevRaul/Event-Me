import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import event from './event';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};


const rootReducer =  combineReducers({
  event
});

export default persistReducer(persistConfig, rootReducer);