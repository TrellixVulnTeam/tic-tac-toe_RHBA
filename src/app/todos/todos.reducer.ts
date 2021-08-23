import { addToDo, removeToDo, completeToDo } from "./todos.actions";
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
);

export function todoReducer(state: ToDoState, action) {
    return _todoReducer (state, action);
}

