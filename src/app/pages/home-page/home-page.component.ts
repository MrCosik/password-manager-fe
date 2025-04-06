import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { isLoggedIn } from '../../states/auth/auth.selector';

@Component({
  selector: 'app-home-page',
  imports: [MatButton, RouterLink, AsyncPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  protected store = inject(Store);

  isLoggedIn$ = this.store.select(isLoggedIn);
}
