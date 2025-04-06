import { Component, inject } from '@angular/core';
import { MatFormField, MatInput } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  imports: [MatInput, MatFormField, MatLabel, ReactiveFormsModule, MatButton],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  providers: [LoginPageService],
})
export class LoginPageComponent {
  private formBuilder = inject(FormBuilder).nonNullable;
  private loginPageService = inject(LoginPageService);

  form = this.formBuilder.group({
    email: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
  });

  login() {
    if (this.form.value) {
      this.loginPageService.login({ username: this.form.value.email!, password: this.form.value.password! });
    }
  }
}
