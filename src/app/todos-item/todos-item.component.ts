import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../todos/todos.selector';
import { Store } from '@ngrx/store';
import { removeToDo, completeToDo, editToDo } from '../todos/todos.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent {

  @Input() todo: ToDo;
  @Input() displayType: string;

  editedContent: string;
  isClicked: boolean;

  constructor(private store: Store<{ todoDetails }>) { }

  removeToDo(id: number) {
    this.store.dispatch(removeToDo({id}));
  }

  completeToDo(id: number) {
    this.store.dispatch(completeToDo({id}));
  }

  editToDo(id: number, content: string) {
    this.store.dispatch(editToDo({id, content}));
    this.isClicked = false;
  }

  clicked() {
    this.isClicked = true;
  }
}
