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
