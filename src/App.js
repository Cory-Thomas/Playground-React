import React, { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment' :
      return {count: state.count + 1};
    case 'decrement' :
      return {count: state.count - 1};
    default: 
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <div>
        {state.count}
      </div>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
};

export default App;
