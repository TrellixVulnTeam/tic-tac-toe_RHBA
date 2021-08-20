import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface GameState {
    playerX: number;
    playerO: number;
    round: number;
}
  
export const initialState: GameState = {
    playerX: 0,
    playerO: 0,
    round: 0
};

export const GAME_STATE_NAME = 'score';

const getGameState = createFeatureSelector<GameState>(GAME_STATE_NAME);

export const getPlayerX = createSelector(getGameState, (state) => {
    return state.playerX;
});

export const getPlayerO = createSelector(getGameState, (state) => {
    return state.playerO;
});

export const getRound = createSelector(getGameState, (state) => {
    return state.round;
});