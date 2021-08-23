import { createAction } from '@ngrx/store';

export const incrementX = createAction('[Board Component] Increment X');
export const incrementO = createAction('[Board Component] Increment 0');
export const incrementRound = createAction('[Board Component] Increment Round');
export const resetGame = createAction('[Board Component] Reset Game');


