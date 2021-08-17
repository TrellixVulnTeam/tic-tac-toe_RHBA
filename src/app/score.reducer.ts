import { incrementX, incrementO, resetGame } from './score.actions';
import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from './score.actions';

const initialState: State = {
    playerX: 0,
    playerO: 0,
};
 
const _scoreReducer = createReducer(
  initialState,
  on(incrementX, state => ({ ...state, playerX: state.playerX + 1 })),
  on(incrementO, state => ({ ...state, playerO: state.playerO + 1 })),
  on(resetGame, state => ({ playerX: 0, playerO: 0 }))
);
 
export function scoreReducer(state, action) {
  return _scoreReducer(state, action);
}

export interface State {
    playerX: number;
    playerO: number;
}

  