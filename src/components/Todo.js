import React, { useState } from 'react';
import styled from 'styled-components';
import { updateEdit, toggleTodo, updateItem, deleteTodo } from '.././store/actions'
import { connect } from 'react-redux';

const StyledDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2%;
    text-align: center;
    padding: 8%;
    background-color: lightskyblue;
    button{
        margin: 1%;
        padding: 1%;
        width: 100px;
    }
`;

const Todo = ({ todo, updateEdit, toggleTodo, updateItem, deleteTodo }) => {
    const [newTitleText, setNewTitleText] = useState('');
    return (
        <StyledDiv>
            <span 
                style={{ textDecorationLine: todo.complete ? 
                    'line-through' 
                    : null }} 
            >
                {
                    !todo.edit ? (
                        <>
                            <p>{ todo.item + ' ' }</p>
                            <button onClick={() => updateEdit( todo )}>edit</button>
                            <button onClick={ () => toggleTodo( todo )}> Complete </button>
                        </>
                    ) : (
                        <div>
                            <input
                                type="text"
                                name="newText"
                                value={newTitleText}
                                placeholder={todo.item}
                                onChange={ e => setNewTitleText(e.target.value)}
                                
                            />
                            <button onClick={() => updateItem(todo, newTitleText )}>
                                Update title
                            </button>
                        </div>
                    )
                }
             </span>
             
            
            {
                todo.complete &&
                <button onClick={ () => deleteTodo(todo)}> Remove Completed </button>
                
            } 
        </StyledDiv> 
    )
};

const mapStateToProps = state => {
    return {};
  };

export default connect(mapStateToProps, { updateEdit, toggleTodo, updateItem, deleteTodo })( Todo );