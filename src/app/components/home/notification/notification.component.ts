import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationModel } from '../../models/notification-model';
import { NotificationService } from '../../services/notification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {

  showPanel!: boolean;
  notification!: NotificationModel;
  notificationSub!: Subscription;
  message:any
  constructor(private notificationService: NotificationService, private toastr: ToastrService) {
    notificationService.message.subscribe(() => {
      this.message = this.notificationService.message.getValue()
    })
    notificationService.notificationReceived.subscribe(() => {
      if(notificationService.notificationReceived.getValue() != false){
        this.showSuccess()
      } else {
        // console.log('hi');
      }
    })
   }

  ngOnInit(): void {
    
    this.notificationSub =
    this.notificationService.getNotification().subscribe (
      notification => {
        this.notification = notification;
        this.showPanel = notification !==null;
      }
    )
  }
  showSuccess() {
    // console.log(this.notification);
    this.toastr.success(this.message.body,this.message.title);
  }

  ngOnDestroy() {
    this.notificationSub.unsubscribe();
  }

}