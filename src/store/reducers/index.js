import {
    ADD_TODO,
    // TOGGLE_TODO,
    // DELETE_TODO,
    // DELETE_ALL,
    // UPDATE_EDIT,
    // UPDATE_ITEM,
    // newTodo
  } from '../actions';
  
  export const initialState = {
      todos: [
        {
            item: 'Learn about reducers ',
            complete: false,
            id: Date.now(), 
            edit: false
        },
        {
            item: 'Clean room ',
            complete: false,
            id: Date.now() + 1,
            edit: false
        },
    ]
  };

// export const newTodo = item => {
//     return { id: Date.now(), item: item, complete: false }
// };

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(state)
          return {
            ...state, 
            todos: [ ...state.todos, action.payload ]
            // id: Date.now(), item: action.payload.item, complete: false
          }
        // case TOGGLE_TODO:
        //     return state.map( todo => {
        //         if ( todo.id === action.payload.id ){
        //             return { ...todo, complete: !todo.complete } // reverses polarity of complete
        //         }
        //         return todo;
        //     })
        // case DELETE_TODO:
        //     return state.filter( todo => {
        //         if (todo.complete){
        //             return todo.id !== action.payload.id
        //         }
        //         return todo;
        //     })
        // case DELETE_ALL:
        //     return (
        //         state.filter( item => item.complete === false)
        //     )
        // case UPDATE_EDIT:
        //     return state.map( todo => {
        //         if ( todo.id === action.payload.id ){
        //             return { ...todo, edit: !todo.edit } // reverses polarity of complete
        //         }
        //         return todo;
        //     })

        // case UPDATE_ITEM:
        //     return state.map( todo => {
        //         if ( todo.id === action.payload.id ){
        //             return { ...todo, item: action.textPayload, edit: false } // reverses polarity of complete
        //         }
        //         return todo;
            // })
        default: 
            return state;
    }
}