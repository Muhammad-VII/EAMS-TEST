import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/login/change-password/change-password.component';
import { ResetPassComponent } from './components/login/reset-pass/reset-pass.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { TickedSupportComponent } from './components/login/ticked-support/ticked-support.component';
import { GetEmailComponent } from './components/login/get-email/get-email.component';
import { LockScreenComponent } from './components/home/lock-screen/lock-screen.component';
import { MainComponent } from './components/home/main/main.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { ExcelComponent } from './components/home/excel/excel.component';
import { WordComponent } from './components/home/word/word.component';
import { SmsComponent } from './components/home/window-screen/components/sms/sms.component';
import { LogHistoryComponent } from './components/home/log-history/log-history.component';
import { ItTicketComponent } from './components/home/it-ticket/it-ticket.component';
import { CloudComponent } from './components/home/cloud/cloud.component';
import { SharingComponent } from './components/home/sharing/sharing.component';
import { RequestComponent } from './components/home/request/request.component';
import { GrapesjsComponComponent } from './components/grapesjs-compon/grapesjs-compon.component';

const routes: Routes = [
  { path: '',  component: MainComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'change-pass', component: ChangePasswordComponent },
  { path: 'reset-pass', component: ResetPassComponent },
  { path: 'get-email', component: GetEmailComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'ticket-support', component: TickedSupportComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'request', component: RequestComponent },
  { path: 'excel', component: ExcelComponent },
  { path: 'word', component: WordComponent },
  { path: 'sms', component: SmsComponent },
  { path: 'history', component: LogHistoryComponent },
  { path: 'it-ticket', component: ItTicketComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'sharing', component: SharingComponent },
  { path: 'lock-screen', component: LockScreenComponent },
  { path: 'grapesjs', component: GrapesjsComponComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
