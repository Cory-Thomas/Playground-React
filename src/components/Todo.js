import React, { useState } from 'react';
import { updateEdit, toggleTodo, updateItem, deleteTodo } from '.././store/actions'
import { connect } from 'react-redux';

const Todo = ({ todo, updateEdit, toggleTodo, updateItem, deleteTodo }) => {
    const [newTitleText, setNewTitleText] = useState('');
    return (
        <div>
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
             
            <button onClick={ () => toggleTodo( todo )}> Complete </button>
            {
                todo.complete &&
                <button onClick={ () => deleteTodo(todo)}> Remove Completed </button>
                
            } 
        </div> 
    )
};

const mapStateToProps = state => {
    return {};
  };

export default connect(mapStateToProps, { updateEdit, toggleTodo, updateItem, deleteTodo })( Todo );