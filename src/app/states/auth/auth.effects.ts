import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, logout } from './auth.actions';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private action = inject(Actions);
  private router = inject(Router);

  login$ = createEffect(
    () =>
      this.action.pipe(
        ofType(login),
        tap(async action => {
          localStorage.setItem('user', JSON.stringify(action));
          await this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.action.pipe(
      ofType(logout),
      tap(() => {
        localStorage.removeItem('user');
      })
    ),{dispatch: false}
  );
}
