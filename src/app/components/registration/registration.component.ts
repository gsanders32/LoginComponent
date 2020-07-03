import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formRegister: FormGroup;

  get passwordError(): boolean {
    return this.formRegister.hasError('passwordError');
  }

  constructor(private formBuilder: FormBuilder) {
    this.formRegister = this.formBuilder.group({
      inputEmail: [null, Validators.compose([Validators.required, Validators.email, Validators.minLength(7), Validators.maxLength(100)])],
      inputPassword: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      inputConfirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])]
    },
    {
      validators: this.passwordValidator
    });
  }

  ngOnInit(): void {
  }

  passwordValidator(control: AbstractControl): ValidationErrors {
    const password = control.get( 'inputPassword' );
    const confirmPassword = control.get( 'inputConfirmPassword' );
    if ( confirmPassword.value !== null && password.value !== confirmPassword.value ) {
      return { passwordError: true };
    }
    return null;
  }
}
