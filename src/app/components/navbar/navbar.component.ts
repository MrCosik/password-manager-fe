import { Component, inject } from '@angular/core';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { NavbarService } from './navbar.service';
import { Store } from '@ngrx/store';
import { isLoggedIn } from '../../states/auth/auth.selector';
import { AsyncPipe } from '@angular/common';
import { logout } from '../../states/auth/auth.actions';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [MatMenu, MatMenuItem, MatMenuTrigger, RouterLink, AsyncPipe, MatButton],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [NavbarService],
})
export class NavbarComponent {
  protected store = inject(Store);

  isLoggedIn$ = this.store.select(isLoggedIn);

  logout() {
    this.store.dispatch(logout());
  }
}
