import { Component, signal } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

export interface Todo {
  id: number;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-todo-page',
  imports: [MatFormField, MatLabel, MatInput, MatButton, MatCheckbox, FormsModule, NgClass],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  protected value = '';

  protected todos = signal<Todo[]>([]);

  protected addTodo() {
    this.todos.update(todos => [...todos, { id: todos.length, value: this.value, checked: false }]);
    this.value = '';
  }
}
