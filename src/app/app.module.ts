import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { scoreReducer } from './score.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodosComponent } from './todos/todos.component';
import { todoReducer } from './todos/todos.reducer';
import { TodosItemComponent } from './todos-item/todos-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    TodosComponent,
    TodosItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      gameDetails: scoreReducer,
      todoDetails: todoReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
    // EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
