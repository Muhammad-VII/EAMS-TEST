import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  // encapsulation: ViewEncapsulation.None,
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  constructor(private _Router:Router) { }

  resetPasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.min(0),
      Validators.max(9),
      Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*W)'),
      //TODO regex for symbols
    ]),
    confirmPassword: new FormControl(null, [ Validators.required ]),
  });
  value = '';
 back() {
    this._Router.navigate(['login']);
  }
  submitForm(formValues:FormGroup) {
    //TODO API CALL
    //TODO redirection user to login page using _Router
  }
  ngOnInit(): void {}
}
