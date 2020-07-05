import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  formUserProfile: FormGroup;
  userProfileData: any[] = [];

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.formUserProfile = this.formBuilder.group({
      inputFName: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      inputLName: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      inputDOB: [null, Validators.compose([Validators.required])],
      inputFood: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      inputMovie: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      inputArtist: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      inputHobbies: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      address: this.formBuilder.group({
        inputStreet: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
        inputCity: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
        inputState: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
        inputZip: [null, Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]{4}$')])],
      })
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.userProfileData.push(this.formUserProfile);
    console.log(this.userProfileData);
    this.toastr.success('User Profile', 'Saved', {
      timeOut: 3000
    });
  }

  updateUser(){
    this.toastr.success('User Profile', 'Updated', {
      timeOut: 3000
    });
  }

}
