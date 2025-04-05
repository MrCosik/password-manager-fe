import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { TodosActions } from './states/todos/todos.actions';
import { login } from './states/auth/auth.actions';

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
    const user = localStorage.getItem('user');

    if (todos) {
      this.store.dispatch(TodosActions.getTodoList({ todos: JSON.parse(todos) }));
    }

    if (user) {
      this.store.dispatch(login(JSON.parse(user)));
    }
  }
}
