import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  closeDialog(): void {
    this._MatDialogRef.close();
  }

  focus(e: any) {
    e.target.classList.add('large_Index');
    $(
      '#Asset, #Education, #IT, #Delivery, #BI, #CRM, #Controller, #E-Commerce, #Finance, #Fleet, #GPS, #HR, #Inventory'
    ).removeClass('large_Index');
  }
  constructor(private _MatDialogRef:MatDialogRef<CountryDetailsComponent>) { }

  ngOnInit(): void {
  }

}
