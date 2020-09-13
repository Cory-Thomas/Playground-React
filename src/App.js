import React, { useState } from 'react';
import Todo from './components/Todo';
import { connect } from "react-redux";
import { newTodo } from "./store/actions/todoActions";

const App = ({ newTodo, todos }) => {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    newTodo( name )
    setName('')
    console.log(name)
  };

  console.log('APP C state', todos)
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
      {
        todos.map( todo => {
          return <Todo key={todo.id} todo={todo} />
          // return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect( mapStateToProps, { newTodo })( App );
