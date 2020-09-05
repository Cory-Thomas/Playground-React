import React, { useReducer } from 'react';
import './App.css';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  SAVE: 'save'
};

const countReducer = ( state, action ) => {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.SAVE:
      return { ...state, save: state.count };
    default: 
      return state;
  };
};

function App() {
  const [state, dispatch] = useReducer( countReducer, { count: 0, save: null } )

  return (
    <>
      <button onClick={ () => dispatch({ type: ACTIONS.DECREMENT })}> - </button>
      <div>
        { state.count }
      </div>
      <button onClick={ () => dispatch({ type: ACTIONS.INCREMENT })}> + </button>
      <div>
        <div>
          Saved State: { state.save }
        </div>
        <button onClick={ () => dispatch({ type: ACTIONS.SAVE })}>Save</button>
      </div>
    </>
  );
};

export default App;
