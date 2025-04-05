import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TodosActions } from './todos.actions';
import { tap } from 'rxjs';

@Injectable()
export class TodoEffects {
  store = inject(Store);
  private actions$ = inject(Actions);

  addTodo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosActions.addTodo),
        tap(action => {
          const todos = localStorage.getItem('todos');

          if (todos) {
            const todosArr = JSON.parse(todos);
            const arr = [...todosArr, { id: todosArr.length + 1, value: action.value, checked: false }];
            localStorage.setItem('todos', JSON.stringify(arr));
          } else {
            localStorage.setItem('todos', JSON.stringify([{ id: 1, value: action.value, checked: false }]));
          }
        })
      ),
    { dispatch: false }
  );
}
