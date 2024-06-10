import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment} from "./redux/slice/slice1";

const App = () => {

    const {value} = useAppSelector(state => state.slice1)
    const dispatch = useAppDispatch()


  return (
      <div>

          <h3>{value}</h3>

          <button onClick={()=>{
            dispatch(increment(2))
          }}>increment</button>

          <button onClick={()=>{
              dispatch(decrement(3))
          }}>decrement</button>


      </div>
  );
};

export default App;