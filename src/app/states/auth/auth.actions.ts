import { createAction, props } from '@ngrx/store';

export interface User {
  username: string;
  password: string;
}

export const login = createAction('[Login Page] Login', props<User>());

export const logout = createAction('[Navbar] Logout')
