import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShowComponentsService } from 'src/app/components/services/show-components.service';
declare const $: any;
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent implements OnInit {
  componentInfo:any[];
    data:any[];
  constructor(
    public dialogRef: MatDialogRef<FinanceComponent>,
    private _ShowComponentsService: ShowComponentsService
  ) {
    this.componentInfo = this._ShowComponentsService.componentsData
      const filterdComponent:any = this.componentInfo.filter(ele => ele.Name == 'Finance');
      this.data = filterdComponent
  }
  closeDialog(e:any) {
    this._ShowComponentsService.closeDialog(this.dialogRef.id,e.path[4].id)
  }
  focus(e:any) {
    e.target.classList.add("large_Index")
    $("#Asset, #Education, #IT, #Delivery, #BI, #Banks, #Controller, #E-Commerce, #Fleet, #GPS, #HR, #Inventory").removeClass("large_Index")
  }
  minimize(e:any) {
    $(e.path[4]).fadeOut(200)
  }
  ngOnInit(): void {}
}
