import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShowComponentsService } from 'src/app/components/services/show-components.service';
declare const $:any
@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.scss']
})
export class IotComponent implements OnInit {
  componentInfo:any[];
  data:any[];
  constructor(
    public dialogRef: MatDialogRef<IotComponent>,
    private _ShowComponentsService: ShowComponentsService
  ) {
    this.componentInfo = this._ShowComponentsService.componentsData
      const filterdComponent:any = this.componentInfo.filter(ele => ele.Name == 'IOT');
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
