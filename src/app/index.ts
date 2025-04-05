import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './states/auth/auth.reducer';
import { Todo } from './pages/todo-page/todo-page.component';
import { todosReducer } from './states/todos/todos.reducer';

export interface AppState {
  auth: AuthState,
  todos: Todo[]
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  todos: todosReducer
}
