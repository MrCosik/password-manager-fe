import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../pages/todo-page/todo-page.component';
import { TodosActions } from './todos.actions';

export const initialState: Todo[] = [];

export const collectionReducer = createReducer(
  initialState,
  on(TodosActions.addTodo, (state, { todo }) => {
    if (state.indexOf(todo) > -1) return state;
    return [...state, todo];
  }),
  on(TodosActions.removeTodo, (state, { todoId }) => state.filter(todo => todo.id !== todoId))
);
