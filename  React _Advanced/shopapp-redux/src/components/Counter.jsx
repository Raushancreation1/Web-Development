import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement} from '../redux/Slices/CounterSlice'

const Counter = () => {
  // useSelector is a hook that allows you to extract data from the Redux store state
  // useSelector takes a function as an argument, which receives the entire Redux store state
  // and returns the part of the state that you want to access
  // In this case, we are accessing the value property of the Counter slice of the state
const Count = useSelector((state) => state.Counter.value);
const dispatch = useDispatch();

  return (
    <div>

      <button
      onClick={() => dispatch(increment())}
      >
      Increment
    </button>
    <br/>
    <br/>

    <div>{Count}</div>

    <br/>
    <br/>

    <button
    onClick={() => dispatch(decrement())}
    >
      Decrement
    </button>

    </div>
  )
}

export default Counter