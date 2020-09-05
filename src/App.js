import React, { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment' :
      return {...state, count: state.count + 1};
    case 'decrement' :
      return {...state, count: state.count - 1};
    case 'save' :
      return {...state, save: state.count}
    default: 
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer( reducer, {count: 0, save: null} )

  return (
    <>
      <button onClick={() => dispatch( {type: 'decrement'} )}> - </button>
      <div>
        {state.count}
      </div>
      <button onClick={() => dispatch( {type: 'increment'} )}> + </button>
      <div>
        <div>
          Saved State: {state.save}
        </div>
        <button onClick={() => dispatch( {type: "save"} )}>Save</button>
      </div>
    </>
  );
};

export default App;
