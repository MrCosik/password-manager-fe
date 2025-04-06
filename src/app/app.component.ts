import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { TodosActions } from './states/todos/todos.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  title = 'password-manager-fe';

  ngOnInit() {
    const todos = localStorage.getItem('todos');

    if (todos) {
      this.store.dispatch(TodosActions.getTodoList({ todos: JSON.parse(todos) }));
    }
  }
}
