import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../pages/todo-page/todo-page.component';

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const selectCollection = createFeatureSelector<number[]>('collection');

export const selectTodoCollection = createSelector(selectTodos, selectCollection, (todos, collection) => {
  return collection.map(id => todos.find(todo => todo.id === id)!);
});
