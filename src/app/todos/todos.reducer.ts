import { addToDo, removeToDo, completeToDo, editToDo } from "./todos.actions";
import { createReducer, on } from '@ngrx/store';
import { initialState, ToDoState } from './todos.selector';
import { ToDo } from "./todos.selector";

const _todoReducer = createReducer(
    initialState,
    on(addToDo, (state, { id, content, completed }) => ({
        ...state,
        list: [...state.list, {id: id, content: content, completed: completed} as ToDo]
    })),
    on(removeToDo, (state, { id }) => ({
        ...state,
        list: state.list.filter(item => item.id !== id)
    })),
    on(completeToDo, (state, { id }) => ({
        ...state,
        list: state.list.map(item => (item.id == id) ? {...item, completed: true} : item)
    })),
    on(editToDo, (state, { id, content }) => ({
        ...state,
        list: state.list.map(item => (item.id == id) ? {...item, content: content} : item)
    })),
);

export function todoReducer(state: ToDoState, action) {
    return _todoReducer (state, action);
}

