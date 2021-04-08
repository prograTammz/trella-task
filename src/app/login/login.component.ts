import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  constructor(public fb: FormBuilder, private data: DataService) { }

  ngOnInit(): void {
    this.constructLoginForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  constructLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();

    if(this.loginForm.valid) {
      this.data.login(this.f.username.value)
    }
  }

}
