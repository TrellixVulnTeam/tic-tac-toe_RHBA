import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../todos/todos.selector';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent {
  @Output() onRemoveToDo = new EventEmitter<number>();

  @Input() todo: ToDo;

  constructor() { }

  removeToDo() {
    this.onRemoveToDo.emit(this.todo.id);
  }

}
