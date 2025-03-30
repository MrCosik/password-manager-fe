import { createActionGroup, props } from '@ngrx/store';
import { Todo } from '../../pages/todo-page/todo-page.component';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    'Add Todo': props<{ todo: Todo }>(),
    'Remove Todo': props<{ todoId: number }>(),
  },
});

export const TodosApiActions = createActionGroup({
  source: 'Todos Api',
  events: {
    'Get Todo list': props<{ todos: Todo[] }>(),
  },
});
