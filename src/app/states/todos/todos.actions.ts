import { createActionGroup, props } from '@ngrx/store';
import { Todo } from '../../pages/todo-page/todo-page.component';

export const TodosActions = createActionGroup({
  source: 'Todo Page',
  events: {
    'Add Todo': props<{ value: string }>(),
    'Remove Todo': props<{ todoId: number }>(),
    'Get Todo List': props<{todos: Todo[]}>(),
    'Update Todo': props<{todoId: number}>()
  },
});

