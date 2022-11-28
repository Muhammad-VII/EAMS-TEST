import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private _MatDialogRef: MatDialogRef<UserDetailsComponent>) {}

  closeDialog(): void {
    this._MatDialogRef.close();
  }

  focus(e: any) {
    e.target.classList.add('large_Index');
    $(
      '#Asset, #Education, #IT, #Delivery, #BI, #CRM, #Controller, #E-Commerce, #Finance, #Fleet, #GPS, #HR, #Inventory'
    ).removeClass('large_Index');
  }

  ngOnInit(): void {}
}
