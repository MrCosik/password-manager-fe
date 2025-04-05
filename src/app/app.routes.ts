import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'todo',
    component: TodoPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: HomePageComponent,
  },
];
