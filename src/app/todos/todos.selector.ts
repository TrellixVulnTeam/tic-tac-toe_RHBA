import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface ToDo {
    id: number;
    content: string;
    completed: boolean;
}
export interface ToDoState {
    list: Array<ToDo>;
}

export const initialState: ToDoState = {
    list: [{ id: 1, content: "Testing To Do", completed: false } as ToDo]
};

export const TODO_STATE_NAME = 'todoDetails';

const getToDoState = createFeatureSelector<ToDoState>(TODO_STATE_NAME);

export const getToDos = createSelector(getToDoState, (state: ToDoState) => {
    return state.list;
});


