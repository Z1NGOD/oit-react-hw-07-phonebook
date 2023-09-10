import { combineReducers } from 'redux';
import { contactsReducer, filterReducer } from './slice';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
