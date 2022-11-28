import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShowComponentsService } from 'src/app/components/services/show-components.service';
declare const $:any;
@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit {
  componentInfo:any[];
  data:any[];
  constructor(
    public dialogRef: MatDialogRef<FleetComponent>,
    private _ShowComponentsService: ShowComponentsService
  ) {
    this.componentInfo = this._ShowComponentsService.componentsData
      const filterdComponent:any = this.componentInfo.filter(ele => ele.Name == 'Fleet');
      this.data = filterdComponent
  }
  closeDialog(e:any) {
    this._ShowComponentsService.closeDialog(this.dialogRef.id,e.path[4].id)
  }
  focus(e:any) {
    e.target.classList.add("large_Index")
    $("#Asset, #Education, #IT, #Delivery, #BI, #Banks, #Controller, #E-Commerce, #Finance, #GPS, #HR, #Inventory").removeClass("large_Index")
  }
  minimize(e:any) {
    $(e.path[4]).fadeOut(200)
  }
  ngOnInit(): void {}

}
