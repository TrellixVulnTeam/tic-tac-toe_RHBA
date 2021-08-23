import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../todos/todos.selector';
import { Store } from '@ngrx/store';
import { removeToDo, completeToDo } from '../todos/todos.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent {

  @Input() todo: ToDo;
  @Input() displayType: string;

  constructor(private store: Store<{ todoDetails }>) { }

  removeToDo(id: number) {
    this.store.dispatch(removeToDo({id}));
  }

  completeToDo(id: number) {
    this.store.dispatch(completeToDo({id}));
  }
}
