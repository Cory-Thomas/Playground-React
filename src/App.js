import React, { useState } from 'react';
// import Todo from './components/Todo';
import { connect } from "react-redux";
import { newTodo } from "./store/actions/todoActions";

function App({ newTodo }) {
  // const [state, dispatch] = useReducer( reducer, { count: 0, save: null } )
  // const [todoState, todoDispatch] = useReducer( reducer, [] )
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    newTodo( name )
    setName('')
    console.log(name)
  };

  return (
    <div>
      <h1>To-do Creator</h1>
      <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'> Todo:</label>
        <input 
          type='text' 
          id='todo' 
          name='todoText'
          value={name}
          placeholder='Type a TO-DO here'
          onChange={event => setName(
            event.target.value
          )}
        />
        <button type='submit'> Add </button>
      </form>
      {/* <button onClick={ () => dispatch({ type: DELETE_ALL, payload: { state }})}> Delete All Completed </button> */}
      </section>
      {/* {
        state.map( todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })
      } */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    item: state.item,
    complete: state.complete,
    id: state.id, 
    edit: state.edit
  };
};

export default connect( mapStateToProps, { newTodo })( App );
