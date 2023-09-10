import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice/slice';
import { contactsApi } from './contactsSliceRTK/contactsSliceRTK';

const rootReduser = combineReducers({
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
