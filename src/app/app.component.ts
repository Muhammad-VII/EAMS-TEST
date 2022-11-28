import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { NotificationService } from '../app/components/services/notification.service';
import { DxDataGridModule } from 'devextreme-angular';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { DetailsGridComponent } from './details-grid/details-grid.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EAMS';

  customersData: any;

  shippersData: any;

  dataSource: any;

  url: string;

  masterDetailDataSource: any;

  constructor(
    private afMessaging: AngularFireMessaging,
    private notificationService: NotificationService
  ) {
    this.url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

    this.dataSource = AspNetData.createStore({
      key: 'OrderID',
      loadUrl: `${this.url}/Orders`,
      insertUrl: `${this.url}/InsertOrder`,
      updateUrl: `${this.url}/UpdateOrder`,
      deleteUrl: `${this.url}/DeleteOrder`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });

    this.customersData = AspNetData.createStore({
      key: 'Value',
      loadUrl: `${this.url}/CustomersLookup`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });

    this.shippersData = AspNetData.createStore({
      key: 'Value',
      loadUrl: `${this.url}/ShippersLookup`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
    
    this.requestedPermission();
    this.listen();
  }


  requestedPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
        // console.log('Permission Generated!');
        // console.log(token);
      },
      (error) => {
        // console.log(error);
      }
    );
  }
  listen() {
    this.afMessaging.messages.subscribe((message: any) => {
      console.log(message);
      this.notificationService.message.next(message.notification);
      this.notificationService.notificationReceived.next(true);
      this.notificationService.setNotification({
        body: message.notification.body,
        title: message.notification.title,
      });
    });
  }
}
