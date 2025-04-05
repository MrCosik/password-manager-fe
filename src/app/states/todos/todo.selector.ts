import { createFeatureSelector } from '@ngrx/store';
import { Todo } from '../../pages/todo-page/todo-page.component';

export const selectTodos = createFeatureSelector<Todo[]>('todos');
