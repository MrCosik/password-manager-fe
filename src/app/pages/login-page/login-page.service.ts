import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, User } from '../../states/auth/auth.actions';

@Injectable()
export class LoginPageService {
  private store = inject(Store);

  login(userData: User) {
    this.store.dispatch(login(userData));
  }
}
