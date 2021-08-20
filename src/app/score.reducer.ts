import { incrementX, incrementO, incrementRound, resetGame } from './score.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './index';

// const initialState: State = {
//     playerX: 0,
//     playerO: 0,
// };
 
const _scoreReducer = createReducer(
  initialState,
  on(incrementX, state => ({ ...state, playerX: state.playerX + 1 })),
  on(incrementO, state => ({ ...state, playerO: state.playerO + 1 })),
  on(incrementRound, state => ({ ...state, round: state.round + 1 })),
  on(resetGame, state => ({ playerX: 0, playerO: 0, round: 0 }))
);
 
export function scoreReducer(state, action) {
  return _scoreReducer(state, action);
}

// export interface State {
//     playerX: number;
//     playerO: number;
// }

  