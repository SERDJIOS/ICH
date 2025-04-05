// src/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние: массив пользователей
const initialState = {
  users: [
    { id: 1, name: 'Alice', age: 25, city: 'Paris' },
    { id: 2, name: 'Bob', age: 30, city: 'London' },
    { id: 3, name: 'Charlie', age: 35, city: 'New York' },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

// Редьюсер по умолчанию экспортируем для подключения в store
export default userSlice.reducer;
