import { AccountComponent } from './../home/window-screen/components/account/account.component';
import { WidgetComponent } from './../home/window-screen/components/widget/widget.component';
import { FriendsComponent } from './../home/window-screen/components/friends/friends.component';
import { BehaviorSubject } from 'rxjs';
import { CivilComponent } from './../home/window-screen/components/civil/civil.component';
import { StateComponent } from './../home/window-screen/components/state/state.component';
import { CountriesComponent } from './../home/window-screen/components/countries/countries.component';
import { IdentityComponent } from './../home/window-screen/components/identity/identity.component';
import { UsersComponent } from './../home/window-screen/components/users/users.component';
import { AddComponent } from './../home/window-screen/components/head/add/add.component';
import { InventoryComponent } from './../home/window-screen/components/inventory/inventory.component';
import { HrComponent } from './../home/window-screen/components/hr/hr.component';
import { GpsComponent } from './../home/window-screen/components/gps/gps.component';
import { FleetComponent } from './../home/window-screen/components/fleet/fleet.component';
import { FinanceComponent } from './../home/window-screen/components/finance/finance.component';
import { ECommerceComponent } from './../home/window-screen/components/e-commerce/e-commerce.component';
import { ControllerComponent } from './../home/window-screen/components/controller/controller.component';
import { CrmComponent } from './../home/window-screen/components/crm/crm.component';
import { HeadComponent } from '../home/window-screen/components/head/head.component';
import { AssetsComponent } from './../home/window-screen/components/assets/assets.component';
import { BiComponent } from './../home/window-screen/components/bi/bi.component';
import { DeliveryComponent } from './../home/window-screen/components/delivery/delivery.component';
import { ItComponent } from './../home/window-screen/components/it/it.component';
import { EducationComponent } from './../home/window-screen/components/education/education.component';
import { IotComponent } from './../home/window-screen/components/iot/iot.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { CitiesComponent } from '../home/window-screen/components/cities/cities.component';
import { SmsComponent } from '../home/window-screen/components/sms/sms.component';
declare const $: any;
@Injectable({
  providedIn: 'root',
})
export class ShowComponentsService {
  componentsData: any;
  taskbarTapsArray: any[] = [];
  taskbarTaps: BehaviorSubject<any> = new BehaviorSubject([]);
  componentsList: any = {
    Component: HeadComponent,
    AddButtonComponent: AddComponent,
    Countries: CountriesComponent,
    Cities: CitiesComponent,
    State: StateComponent,
    Civil: CivilComponent,
    Users: UsersComponent,
    Identity: IdentityComponent,
    IOT: IotComponent,
    Education: EducationComponent,
    IT: ItComponent,
    Delivery: DeliveryComponent,
    BI: BiComponent,
    Asset: AssetsComponent,
    CRM: CrmComponent,
    Controller: ControllerComponent,
    'E-Commerce': ECommerceComponent,
    Finance: FinanceComponent,
    Fleet: FleetComponent,
    GPS: GpsComponent,
    HR: HrComponent,
    Inventory: InventoryComponent,
    Friends: FriendsComponent,
    Widget: WidgetComponent,
    Account: AccountComponent,
    SMS: SmsComponent,
  };

  constructor(private dialog: MatDialog) {
  }

  closeDialog(dialogId: any, eventId: any): void {
    this.taskbarTapsArray.splice(eventId, 1);
    this.taskbarTaps.next(this.taskbarTapsArray);
    this.dialog.getDialogById(dialogId)?.close();
  }
}
