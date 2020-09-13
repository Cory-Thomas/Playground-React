import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    // DELETE_ALL,
    UPDATE_EDIT,
    UPDATE_ITEM
  } from '../actions';
  
  const initialState = {
      todos: [
        {
            item: 'Learn about reducers ',
            complete: false,
            id: Date.now() + Math.random(), 
            edit: false
        },
        {
            item: 'Clean room ',
            complete: false,
            id: Date.now() + Math.random(),
            edit: false
        },
    ]
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(state)
          return {
            ...state, 
            todos: [ 
              ...state.todos, 
              action.payload 
            ]
          }
        case TOGGLE_TODO:
          return { 
            ...state, 
            todos: state.todos.map( todo => {
                if ( todo.id === action.payload.id ){
                    return { 
                      ...todo,
                      complete: !todo.complete,
                    } 
                }
                return todo;
            })
          };
            
        case DELETE_TODO:
          return { 
            ...state, 
            todos: state.todos.filter( todo => {
                if ( todo.complete ){
                    return todo.id !== action.payload.id
                }
                return todo;
            })
          };
        // case DELETE_ALL:
        //     return (
        //         state.filter( item => item.complete === false)
        //     )
        case UPDATE_EDIT:
          return { 
            ...state, 
            todos: state.todos.map( todo => {
                if ( todo.id === action.payload.id ){
                    return { 
                      ...todo,
                      edit: !todo.edit,
                    } 
                }
                return todo;
            })
          };

        case UPDATE_ITEM:
          return { 
            ...state, 
            todos: state.todos.map( todo => {
                if ( todo.id === action.payload.id ){
                    return { 
                      ...todo,
                      item: action.payloadText,
                      edit: false
                    } 
                }
                return todo;
            })
          };
        default: 
            return state;
    }
}