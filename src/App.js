import React, { useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  SAVE: 'save',
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

const reducer = ( state, action ) => {
  switch( action.type ) {
    case ACTIONS.INCREMENT:
      return { 
        count: state.count + 1, 
        save: state.save 
      };
    case ACTIONS.DECREMENT:
      return { 
        count: state.count - 1, 
        save: state.save 
      };
    case ACTIONS.SAVE:
      return { 
        count: state.count, 
        save: state.count 
      };
    case ACTIONS.ADD_TODO:
      return [
        ...state, 
        newTodo(action.payload.name)
      ];
    case ACTIONS.TOGGLE_TODO:
      return state.map( todo => {
        if ( todo.id === action.payload.id ){
          return { ...todo, complete: !todo.complete } // reverses polarity of complete
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return state.filter( todo => todo.id !== action.payload.id )
    default: 
      return state;
  };
};

const newTodo = name => {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [state, dispatch] = useReducer( reducer, { count: 0, save: null } )
  const [todoState, todoDispatch] = useReducer( reducer, [] )
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    todoDispatch({ type: ACTIONS.ADD_TODO, payload: { name: name }})
    setName('')
  };

  return (
    <>
      <button onClick={ () => dispatch({ type: ACTIONS.INCREMENT })}> + </button>
      <div>
        { state.count }
      </div>
      <button onClick={ () => dispatch({ type: ACTIONS.DECREMENT })}> - </button>
      <div>
        <div>
          Saved State: { state.save }
        </div>
        <button onClick={ () => dispatch({ type: ACTIONS.SAVE })}> Save </button>
      </div>

      <form onSubmit={handleSubmit} >
        <label htmlFor='todo'> Todo: </label>
        <input 
          type='text' 
          id='todo' 
          value={name} 
          onChange={ event => setName
            (event.target.value)} 
        />
        <button type='submit'> Submit </button>
      </form>
      {todoState.map( todo => {
        return <Todo key={todo.id} todo={todo} dispatch={todoDispatch} />
      })}
    </>
  );
};

export default App;
