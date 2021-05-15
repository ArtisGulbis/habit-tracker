import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { habitReducer } from './habit/habitReducer';

const persistConfig = {
  key: 'test',
  storage,
};

const rootReducer = combineReducers({ habitReducer });

export default persistReducer(persistConfig, rootReducer);
