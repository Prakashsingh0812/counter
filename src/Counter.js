// src/Counter.js
import React, { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="counter-container">
      <h1>Counter: {state.count}</h1>
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className="counter-button increment"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className="counter-button decrement"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
