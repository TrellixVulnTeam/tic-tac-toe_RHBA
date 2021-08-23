import { createAction, props } from "@ngrx/store";
import { ToDo } from "./todos.selector";
import { Action } from "@ngrx/store";

export const addToDo = createAction('[ToDo Component] Add To Do', props<{ id: number, content: string, completed: boolean }>());
export const completeToDo = createAction('[ToDo Component] Complete To Do');
export const editToDo = createAction('[ToDo Component] Edit To Do');
export const removeToDo = createAction('[ToDo Component] Remove To Do', props<{ id: number }>());

