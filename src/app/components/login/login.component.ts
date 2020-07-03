import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  validLogin = true;
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

  constructor(private formBuilder: FormBuilder, private authorizationService: AuthorizationService, private router: Router) {
    this.formLogin = this.formBuilder.group({
      inputEmail: [null, Validators.compose([Validators.required, Validators.email, Validators.minLength(7), Validators.maxLength(100)])],
      inputPassword: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])]
    });
  }

  ngOnInit(): void {
  }

  submit(){
    this.validLogin = this.authorizationService.login(this.formLogin.controls.inputEmail.value,
      this.formLogin.controls.inputPassword.value);
    if (this.validLogin){
      this.router.navigate(['userprofile']);
    }
  }
}
