import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ticked-support',
  templateUrl: './ticked-support.component.html',
  styleUrls: ['./ticked-support.component.scss'],
})
export class TickedSupportComponent implements OnInit {
  value = '';
  addTicketSupport: FormGroup = new FormGroup({
    token: new FormControl(
      `34959adcd87f445689dbe71e3c34bdd277c2542bb92f4c2c81a83a18642b8799`,
      [Validators.required]
    ),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  constructor(
    private router: Router,
    private _AuthService: AuthenticationService,
    private _Toaster: ToastrService,
    private _NgxSpinner: NgxSpinnerService
  ) {}

  submitTicketForm(submitTicketForm: FormGroup) {
    if (this.addTicketSupport.valid) {
      this._AuthService.addTicketSupport(submitTicketForm).subscribe((res) => {
        this._NgxSpinner.show();
        if (res == 200) {
          this._NgxSpinner.hide();
          this.addTicketSupport.getRawValue();
          this._Toaster.success('Message recevied successfully');
        } else {
          this._NgxSpinner.hide();
          this._Toaster.error('Message not received');
        }
      });
    } else {
      // Object.values(this.addTicketSupport.controls).forEach((control) => {
      //   if (control.invalid) {
      //     control.markAsDirty();
      //     control.updateValueAndValidity({ onlySelf: true });
      //   }
      // });
      this._Toaster.error("Form is not valid")
    }
  }

  ngOnInit(): void {}

  back() {
    this.router.navigate(['login']);
  }
}
