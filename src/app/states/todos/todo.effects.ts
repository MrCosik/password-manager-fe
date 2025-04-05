import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TodosActions } from './todos.actions';
import { tap, withLatestFrom } from 'rxjs';
import { selectTodos } from './todo.selector';

@Injectable()
export class TodoEffects {
  store = inject(Store);
  private actions$ = inject(Actions);

  saveTodoToStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosActions.addTodo, TodosActions.updateTodo),
        withLatestFrom(this.store.select(selectTodos)),
        tap(([_, todos]) => {
          const newArray = [...todos];
          localStorage.setItem('todos', JSON.stringify(newArray));
        })
      ),
    { dispatch: false }
  );
}
