import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();
  // eventEmitter 만드는 부분과, add.emit하는 부분 이해 노

  constructor() { }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }
}
