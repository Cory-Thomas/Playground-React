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

  const increment = () => {
    return dispatch({type: 'increment' })
  }

  const decrement = () => {
    return dispatch({type: 'decrement'})
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <div className="App">
        {state.count}
      </div>
      <button onClick={increment}>+</button>
    </>
  );
};

export default App;
