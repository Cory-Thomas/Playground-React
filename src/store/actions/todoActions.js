export const ADD_TODO = 'add-todo';
export const TOGGLE_TODO = 'toggle-todo';
export const DELETE_TODO = 'delete-todo';
// export const DELETE_ALL = 'delete-all';
export const UPDATE_EDIT = 'update-edit';
export const UPDATE_ITEM = 'update-item';

const dataFormat = {
    item: '',
    complete: false,
    id: null,
    edit: false
}

export const newTodo = item => {
    return ( dispatch ) => { 
        dispatch({
            type: ADD_TODO, 
            payload: { 
                ...dataFormat, 
                item: item, 
                id: Date.now() + Math.random() }
        })
    };
};

export const updateEdit = todo => {
    return ( dispatch ) => {
        dispatch({ 
            type: UPDATE_EDIT, 
            payload: todo 
        })
    };
};

export const updateItem = (todo, textTodo) => {
    return ( dispatch ) => {
        dispatch({ 
            type: UPDATE_ITEM, 
            payload: todo,
            payloadText: textTodo
        })
    };
};

export const toggleTodo = todo => {
    return ( dispatch ) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todo
        })
    }
};

export const deleteTodo = todo => {
    return ( dispatch ) => {
        dispatch({
            type: DELETE_TODO,
            payload: todo
        })
    }
};