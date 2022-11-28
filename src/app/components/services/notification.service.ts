import { NotificationModel } from '../models/notification-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  message = new BehaviorSubject(null)
  notificationReceived = new BehaviorSubject(false);
  notification$: BehaviorSubject<NotificationModel> = new BehaviorSubject<NotificationModel>({title: ' ', body: ' '});
  constructor() { }
  setNotification(notification: NotificationModel) {
    this.notification$.next(notification);
  }

  getNotification() {
    return this.notification$.asObservable();
  }
}
