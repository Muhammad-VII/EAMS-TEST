import { ShowComponentsService } from 'src/app/components/services/show-components.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
declare const $:any;
@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.scss']
})
export class BiComponent implements OnInit {
  componentInfo:any[];
  data:any[];
  constructor(
    public dialogRef: MatDialogRef<BiComponent>,
    private _ShowComponentsService:ShowComponentsService
  ) {
    this.componentInfo = this._ShowComponentsService.componentsData
    const filterdComponent:any = this.componentInfo.filter(ele => ele.Name == 'BI')
    this.data = filterdComponent
  }
  closeDialog(e:any) {
    this._ShowComponentsService.closeDialog(this.dialogRef.id,e.path[4].id)
  }
  focus(e:any) {
    e.target.classList.add("large_Index")
    $("#Banks, #Education, #IT, #Delivery, #Asset, #CRM, #Controller, #E-Commerce, #Finance, #Fleet, #GPS, #HR, #Inventory").removeClass("large_Index")
  }
  minimize(e:any) {
    $(e.path[4]).fadeOut(200)
  }
  ngOnInit(): void {}


}
