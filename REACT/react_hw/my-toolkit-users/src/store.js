// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    users: userReducer, // ключ users отвечает за состояние userSlice
  },
});

export default store;
