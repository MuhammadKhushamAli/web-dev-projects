import { configureStore } from '@reduxjs/toolkit';
import reducerList from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: reducerList
});