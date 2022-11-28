import { Firestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { DeviceUUID } from 'device-uuid';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  apiUrl: string = 'https://eams.azurewebsites.net';
  userData: any;
  currentUser = new BehaviorSubject(null);
  deviceId = new DeviceUUID().get();
  desktopGroups: any[] = [];
  desktopIcons: any[] = [];
  // dataRequest = collection(this.firestore,'/API')
  constructor(
    public firebaseAuth: Auth,
    private router: Router,
    private toastr: ToastrService,
    private _HttpClient: HttpClient,
    private _Spinner: NgxSpinnerService
  ) {
    // const data = collectionData(this.dataRequest, {idField: 'id'}) as Observable<any>
    // data.subscribe((res) => {
    //   this.apiUrl = res[0].Frontend
    // })
    // this.userData = this.firebaseAuth.currentUser;
    // if(localStorage.getItem(`token`) != null){
    //   this.saveCurrentUser();
    // }
  }

  /* Sign in */
  signin(email: string, password: string) {
    this._Spinner.show()
    signInWithEmailAndPassword(this.firebaseAuth, email, password) //TODO Reactivate this
      .then((res) => {
        const requestComponentsForm: FormGroup = new FormGroup({
          token: new FormControl(
            '34959adcd87f445689dbe71e3c34bdd277c2542bb92f4c2c81a83a18642b8799'
          ),
          uid: new FormControl(res.user.uid),
          email: new FormControl(email),
          componentId: new FormControl('F4F97A18-D8AB-40E5-996E-114696F798C7'),
          fireToken: new FormControl(res.user.refreshToken),
          macAd: new FormControl(this.deviceId),
        });
        this._Spinner.show()
        this.requestComponents(requestComponentsForm.value).subscribe((res) => {
          if (!res) {
            this._Spinner.hide()
            this.showError();
          } else {
            sessionStorage.setItem('desktopGroups', JSON.stringify(res?.DesktopGroups));
            sessionStorage.setItem('desktopIcons', JSON.stringify(res?.DesktopIcons));
            sessionStorage.setItem('profileInfo', JSON.stringify(res?.ProfileInfo));
            sessionStorage.setItem('startMenu', JSON.stringify(res?.StartMenu));
            this._Spinner.hide()
            this.showSuccess();
            this.currentUser.next(res?.JwtToken)
            this.router.navigate(['/'])
          }
        });
      })
      .catch((err) => {
        this._Spinner.hide()
        this.toastr.error(err);
      });
  }

  addTicketSupport(addTicketSupport: object): Observable<any> {
    return this._HttpClient.post(`${this.apiUrl}/AddTicketSupport`, addTicketSupport)
  }

  requestComponents(loginForm: object): Observable<any> {
    return this._HttpClient.post(`${this.apiUrl}/GetLoginInfo`, loginForm);
  }

  showSuccess() {
    // console.log(this.notification);
    this.toastr.success('Login Successfully');
  }
  showError() {
    // console.log(this.notification);
    this.toastr.error('Login Failed');
  }
}
