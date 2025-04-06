import { createReducer, on } from '@ngrx/store';
import { login, logout, User } from './auth.actions';

export interface AuthState {
  user?: User;
}

export const authInitialState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  authInitialState,
  on(login, (state, user) => ({user})),
  on(logout, () => {
    return { user: undefined };
  })
);
