import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  // get emailInvalidRequired() {
  //   return this.formLogin.controls.inputEmail.hasError('email') && this.formLogin.controls.email.touched;
  // }
  // get emailInvalidMinLength() {
  //   return this.formLogin.controls.inputEmail.hasError('minLength');
  // }
  // get emailInvalidMaxLength() {
  //   return this.formLogin.controls.inputEmail.hasError('maxLength');
  // }

  // get passwordInvalidRequired() {
  //   return this.formLogin.controls.password.hasError('required') && this.formLogin.controls.password.touched;
  // }
  // get passwordInvalidMinLength() {
  //   return this.formLogin.controls.password.hasError('minLength') && this.formLogin.controls.password.touched;
  // }
  // get passwordInvalidMaxLength() {
  //   return this.formLogin.controls.password.hasError('maxLength') && this.formLogin.controls.password.touched;
  // }

  constructor(private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      inputEmail: [null, Validators.compose([Validators.required, Validators.email, Validators.minLength(7), Validators.maxLength(100)])],
      inputPassword: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])]
    });
  }

  ngOnInit(): void {
  }

}
