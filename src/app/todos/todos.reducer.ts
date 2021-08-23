import { addToDo, removeToDo } from "./todos.actions";
import { createReducer, on } from '@ngrx/store';
import { initialState, ToDoState } from './todos.selector';
import { ToDo } from "./todos.selector";
// import { v4 as uuidv4 } from 'uuid';

const _todoReducer = createReducer(
    initialState,
    on(addToDo, (state, { id, content, completed }) => ({
        ...state,
        // list: [...state.list, { id: uuidv4(), content: content, completed: false } as ToDo]
        list: [...state.list, {id: id, content: content, completed: completed} as ToDo]
    })),
    on(removeToDo, (state, { id }) => ({
        ...state,
        list: state.list.filter(item => item.id !== id)
    })),
);

export function todoReducer(state: ToDoState, action) {
    return _todoReducer (state, action);
}

