import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShowComponentsService } from 'src/app/components/services/show-components.service';
declare const $:any;
@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent implements OnInit {
  componentInfo:any[];
  data:any[];
  constructor(
    public dialogRef: MatDialogRef<CrmComponent>,
    private _ShowComponentsService: ShowComponentsService
  ) {
    this.componentInfo = this._ShowComponentsService.componentsData
    const filterdComponent:any = this.componentInfo.filter(ele => ele.Name == 'CRM');
    this.data = filterdComponent
  }
  closeDialog(e:any) {
    this._ShowComponentsService.closeDialog(this.dialogRef.id,e.path[4].id)
  }
  focus(e:any) {
    e.target.classList.add("large_Index")
    $("#Asset, #Education, #IT, #Delivery, #BI, #Banks, #Controller, #E-Commerce, #Finance, #Fleet, #GPS, #HR, #Inventory").removeClass("large_Index")
  }
  minimize(e:any) {
    $(e.path[4]).fadeOut(200)
  }
  ngOnInit(): void {}


}
