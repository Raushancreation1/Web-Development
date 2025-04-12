import { configureStore } from '@reduxjs/toolkit';
import  CounterSlice  from './Slices/CounterSlice';

const store = configureStore({
  reducer: {
    Counter: CounterSlice
  },
});

export default store;
