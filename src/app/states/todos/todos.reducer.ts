import { Todo } from '../../pages/todo-page/todo-page.component';
import { createReducer, on } from '@ngrx/store';
import { TodosApiActions } from './todos.actions';

export const initialState: Todo[] = [];

export const todosReducer = createReducer(
  initialState,
  on(TodosApiActions.getTodoList, (state, { todos }) => todos)
);
