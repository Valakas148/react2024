import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment, incrementPlus1, reset} from "./redux/slice/slice1";

const App = () => {

    const {value} = useAppSelector(state => state.slice1)
    const dispatch = useAppDispatch()


  return (
      <div>

          <h3>{value}</h3>

          <button onClick={() => {
              dispatch(increment(2))
          }}>increment
          </button>

          <button onClick={() => {
              dispatch(decrement(3))
          }}>decrement
          </button>

          <button onClick={() => {
              dispatch(reset())
          }}>reset
          </button>

          <button onClick={() => {
              dispatch(incrementPlus1())
          }}>increment + 1
          </button>


      </div>
  );
};

export default App;