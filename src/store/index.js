import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counterStore';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});