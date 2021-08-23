import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../todos/todos.selector';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent {
  @Input() todo: ToDo;
  constructor() { }

}
