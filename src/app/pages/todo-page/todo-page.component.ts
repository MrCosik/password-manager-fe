import { Component } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-todo-page',
  imports: [MatFormField, MatLabel, MatInput, MatButton],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  protected addTodo() {}
}
