export const ADD_TODO = 'add-todo';
// export const TOGGLE_TODO = 'toggle-todo';
// export const DELETE_TODO = 'delete-todo';
// export const DELETE_ALL = 'delete-all';
// export const UPDATE_EDIT = 'update-edit';
// export const UPDATE_ITEM = 'update-item';

// export const newTodo = item => {
//     return { id: Date.now(), item: item, complete: false }
// };
const dataFormat = {
    item: '',
    complete: false,
    id: Date.now() + 3,
    edit: false
}

export const newTodo = item => {
    return (dispatch) => { 
        console.log('dispatch ', item)
        dispatch({type: ADD_TODO, payload: { ...dataFormat, item: item }})
    }
};