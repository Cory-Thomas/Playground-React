import React, { useState } from 'react';
import styled from 'styled-components';
import Todo from './components/Todo';
import { connect } from "react-redux";
import { deleteAll, newTodo } from "./store/actions/todoActions";

const StyledDiv = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  section {
    margin: 4% auto;
    margin-bottom: 8%;
  }
  form {
    margin-bottom: 1%;
  }
  input {
    margin: 0 .75%;
    padding: 1%;
  }
  button{
        margin: 1%;
        padding: 1%;
        width: 200px;
  };
`

const App = ({ newTodo, todos, deleteAll }) => {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    newTodo( name )
    setName('')
    console.log(name)
  };

  console.log('APP C state', todos)
  return (
    <StyledDiv>
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
      <button onClick={ () => deleteAll(todos)}> Delete All Completed </button>
      </section>
      {
        todos.map( todo => {
          return <Todo key={todo.id} todo={todo} />
        })
      }
    </StyledDiv>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect( mapStateToProps, { newTodo, deleteAll })( App );
