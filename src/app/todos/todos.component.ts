import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getToDos } from './todos.selector';
import { addToDo, removeToDo } from '../todos/todos.actions';
import { ToDo } from './todos.selector';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoArray: Array<ToDo>;
  list$: Observable<ToDo[]>;
  todos: any[];
  newContent: string;
  newID: number;
  showType: string;

  constructor(private store: Store<{ todoDetails }>) {
    this.list$ = store.select(getToDos);
  }
    
  ngOnInit() {
  }

  addToDo() {
    this.newID = uuidv4();
    // this.store.dispatch(addToDo({ content: this.newContent || 'Untitled'}));
    this.store.dispatch(addToDo({ id: this.newID, content: this.newContent || 'Untitled', completed: false }));
    this.newContent = '';
  }

  removeToDo(id: number) {
    this.store.dispatch(removeToDo({id}));
  }

  changeShowType(type: string) {
    this.showType = type;
    console.log(this.showType);
  }
}
