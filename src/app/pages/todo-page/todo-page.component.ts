import { Component, inject } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { TodosActions } from '../../states/todos/todos.actions';
import { selectTodos } from '../../states/todos/todo.selector';

export interface Todo {
  id: number;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-todo-page',
  imports: [MatFormField, MatLabel, MatInput, MatButton, MatCheckbox, FormsModule, NgClass, AsyncPipe],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  protected value = '';
  private store = inject(Store);

  protected todos$ = this.store.pipe(select(selectTodos));

  protected addTodo() {
    this.store.dispatch(TodosActions.addTodo({  value: this.value }));
    this.value = '';
  }

  checkTodo(todo: Todo) {
    this.store.dispatch(TodosActions.updateTodo({todoId: todo.id}))
  }
}
