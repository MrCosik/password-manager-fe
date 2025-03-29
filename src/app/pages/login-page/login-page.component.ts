import { Component, inject } from '@angular/core';
import { MatFormField, MatInput } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-login-page',
  imports: [MatInput, MatFormField, MatLabel, ReactiveFormsModule, MatButton],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
  });
}
