import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementX, incrementO, incrementRound, resetGame } from '../score.actions';
import { getPlayerX, getPlayerO, getRound } from '../index';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;
  isGameOver: boolean;
  scoreX$: Observable<number>;
  scoreO$: Observable<number>;
  round$: Observable<number>;

  constructor(private store: Store<{ score }>) { 
    this.scoreX$ = store.select(getPlayerX);
    this.scoreO$ = store.select(getPlayerO);
    this.round$ = store.select(getRound);
  }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.isGameOver = false;
    this.incrementRound();
  }

  incrementX() {
    this.store.dispatch(incrementX());
  }

  incrementO() {
    this.store.dispatch(incrementO());
  }

  incrementRound() {
    this.store.dispatch(incrementRound());
  }

  resetGame() {
    this.store.dispatch(resetGame());
    this.newGame();
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.isGameOver) {
      if (!this.squares[idx]) {
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }
  
      this.winner = this.calculateWinner();
    } 
  }

  calculateWinner() {

    // combinations of wins
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.isGameOver = true;

        if (this.squares[a] == 'X') {
          this.incrementX();
        } else {
          this.incrementO();
        }

        return this.squares[a];
      }
    }
    return null;
  }
}
