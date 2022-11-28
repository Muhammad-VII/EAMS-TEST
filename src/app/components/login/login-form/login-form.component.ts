import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService  } from '../../services/authentication.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  value = '';
  constructor(private router: Router, private authenticationService:AuthenticationService) { 
  }
  loginForm: FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [Validators.required])
  })
  Email!: string;
  Plattform!: string;
  Uid!: string;
  Password!: string;

  ngOnInit(): void {
  }
  ticketSupport() {
    this.router.navigate(['ticket-support']);
  }

  signIn(loginFormParam: FormGroup) {
    this.authenticationService.signin(loginFormParam.value.Email, loginFormParam.value.Password);
  }
}
