import { Todo } from '../../pages/todo-page/todo-page.component';
import { createReducer, on } from '@ngrx/store';
import { TodosActions } from './todos.actions';

export const initialState: Todo[] = [];

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.addTodo, (state, { value }) => [...state, { id: state.length + 1, value, checked: false }]),
  on(TodosActions.getTodoList, (state, { todos }) => todos)
);
