import { CountryDetailsComponent } from './components/home/window-screen/components/countries/country-details/country-details.component';
import { AddCountryComponent } from './components/home/window-screen/components/countries/add-country/add-country.component';
import { CountriesComponent } from './components/home/window-screen/components/countries/countries.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JmkComponent } from './components/cms/jmk/jmk.component';
import { MdComponent } from './components/cms/md/md.component';
import { MigComponent } from './components/cms/mig/mig.component';
import { EmojiComponent } from './components/cms/emoji/emoji.component';
import { MallComponent } from './components/cms/mall/mall.component';
import { TawabComponent } from './components/cms/tawab/tawab.component';
import { ChatComponent } from './components/home/chat/chat.component';
import { ChatListComponent } from './components/home/chat-list/chat-list.component';
import { ChatReqComponent } from './components/home/chat-req/chat-req.component';
import { StartComponent } from './components/home/start/start.component';
import { StatisticsComponent } from './components/home/statistics/statistics.component';
import { MainComponent } from './components/home/main/main.component';
import { ResetPassComponent } from './components/login/reset-pass/reset-pass.component';
import { GetEmailComponent } from './components/login/get-email/get-email.component';
import { ChangePasswordComponent } from './components/login/change-password/change-password.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { RequestComponent } from './components/home/request/request.component';
import { ExcelComponent } from './components/home/excel/excel.component';
import { WordComponent } from './components/home/word/word.component';
import { SmsComponent } from './components/home/window-screen/components/sms/sms.component';
import { LogHistoryComponent } from './components/home/log-history/log-history.component';
import { ItTicketComponent } from './components/home/it-ticket/it-ticket.component';
import { CloudComponent } from './components/home/cloud/cloud.component';
import { SharingComponent } from './components/home/sharing/sharing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LockScreenComponent } from './components/home/lock-screen/lock-screen.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { TickedSupportComponent } from './components/login/ticked-support/ticked-support.component';
import { MatMenuModule } from '@angular/material/menu';
import { TaskbarComponent } from './components/home/layouts/taskbar/taskbar.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { EducationComponent } from './components/home/window-screen/components/education/education.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { NotificationComponent } from './components/home/notification/notification.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BiComponent } from './components/home/window-screen/components/bi/bi.component';
import { ItComponent } from './components/home/window-screen/components/it/it.component';
import { AssetsComponent } from './components/home/window-screen/components/assets/assets.component';
import { HeadComponent } from './components/home/window-screen/components/head/head.component';
import { CrmComponent } from './components/home/window-screen/components/crm/crm.component';
import { ControllerComponent } from './components/home/window-screen/components/controller/controller.component';
import { ECommerceComponent } from './components/home/window-screen/components/e-commerce/e-commerce.component';
import { FinanceComponent } from './components/home/window-screen/components/finance/finance.component';
import { FleetComponent } from './components/home/window-screen/components/fleet/fleet.component';
import { GpsComponent } from './components/home/window-screen/components/gps/gps.component';
import { HrComponent } from './components/home/window-screen/components/hr/hr.component';
import { InventoryComponent } from './components/home/window-screen/components/inventory/inventory.component';
import { IotComponent } from './components/home/window-screen/components/iot/iot.component';
import { DeliveryComponent } from './components/home/window-screen/components/delivery/delivery.component';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddComponent } from './components/home/window-screen/components/head/add/add.component';
import { PersonImgComponent } from './components/home/window-screen/components/head/person-img/person-img.component';
import { UsersComponent } from './components/home/window-screen/components/users/users.component';
import { AddUserComponent } from './components/home/window-screen/components/users/add-user/add-user.component';
import { UserImgComponent } from './components/home/window-screen/components/users/user-img/user-img.component';
import { UserDetailsComponent } from './components/home/window-screen/components/user-details/user-details.component';
import { IdentityComponent } from './components/home/window-screen/components/identity/identity.component';
import { AddIdentityComponent } from './components/home/window-screen/components/identity/add-identity/add-identity.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CitiesComponent } from './components/home/window-screen/components/cities/cities.component';
import { AddCityComponent } from './components/home/window-screen/components/cities/add-city/add-city.component';
import { CivilComponent } from './components/home/window-screen/components/civil/civil.component';
import { StateComponent } from './components/home/window-screen/components/state/state.component';
import { AddstateComponent } from './components/home/window-screen/components/state/addstate/addstate.component';
import { AddCivilComponent } from './components/home/window-screen/components/civil/add-civil/add-civil.component';
import { AddBtnComponent } from './components/home/window-screen/components/head/add/add-btn/add-btn.component';
import { StringPipe } from './string.pipe';
import { ClickStopPropagation } from './directives/stop-propegation.directive';
import { registerLocaleData } from '@angular/common';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { StreamComponent } from './components/stream/stream.component';
import { DetailsGridComponent } from './details-grid/details-grid.component';
import { DxDataGridModule } from 'devextreme-angular';
import { UserVideoComponent } from './components/stream/user-video/user-video.component';
import { OpenViduVideoComponent } from './components/stream/open-vidu-video/open-vidu-video.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { GroupIconsComponent } from './components/home/main/group-icons/group-icons.component';
import { WidgetComponent } from './components/home/window-screen/components/widget/widget.component';
import { FriendsComponent } from './components/home/window-screen/components/friends/friends.component';
import { AccountComponent } from './components/home/window-screen/components/account/account.component';

registerLocaleData(en)
@NgModule({
  declarations: [
    AppComponent,
    JmkComponent,
    MdComponent,
    MigComponent,
    EmojiComponent,
    MallComponent,
    TawabComponent,
    ChatComponent,
    ChatListComponent,
    ChatReqComponent,
    StartComponent,
    StatisticsComponent,
    MainComponent,
    ResetPassComponent,
    GetEmailComponent,
    ChangePasswordComponent,
    ProfileComponent,
    RequestComponent,
    ExcelComponent,
    WordComponent,
    SmsComponent,
    LogHistoryComponent,
    ItTicketComponent,
    CloudComponent,
    SharingComponent,
    LockScreenComponent,
    LoginFormComponent,
    TickedSupportComponent,
    TaskbarComponent,
    SidebarComponent,
    NotificationComponent,
    EducationComponent,
    BiComponent,
    ItComponent,
    AssetsComponent,
    HeadComponent,
    CrmComponent,
    ControllerComponent,
    ECommerceComponent,
    FinanceComponent,
    FleetComponent,
    GpsComponent,
    HrComponent,
    InventoryComponent,
    IotComponent,
    DeliveryComponent,
    AddComponent,
    PersonImgComponent,
    UsersComponent,
    AddUserComponent,
    UserImgComponent,
    UserDetailsComponent,
    IdentityComponent,
    AddIdentityComponent,
    CountriesComponent,
    AddCountryComponent,
    CountryDetailsComponent,
    CitiesComponent,
    AddCityComponent,
    CivilComponent,
    StateComponent,
    AddstateComponent,
    AddCivilComponent,
    AddBtnComponent,
    StringPipe,
    ClickStopPropagation,
    StreamComponent,
    DetailsGridComponent,
    UserVideoComponent,
    OpenViduVideoComponent,
    GroupIconsComponent,
    WidgetComponent,
    FriendsComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatMenuModule,
    DragDropModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgZorroAntdModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DxDataGridModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
