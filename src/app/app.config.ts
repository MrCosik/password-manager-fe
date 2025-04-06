import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects } from './states/todos/todo.effects';
import { reducers } from './index';
import { AuthEffects } from './states/auth/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reducers),
    provideStoreDevtools({
      maxAge: 25,
    }),
    provideEffects([TodoEffects, AuthEffects]),
  ],
};
