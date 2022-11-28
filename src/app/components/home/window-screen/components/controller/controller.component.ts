import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ref, getStorage, uploadBytes } from '@angular/fire/storage';
import { ShowComponentsService } from 'src/app/components/services/show-components.service';
declare const $:any;
@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  componentInfo:any[];
  data:any[];
  constructor(
    public dialogRef: MatDialogRef<ControllerComponent>,
    private _ShowComponentsService: ShowComponentsService,
  ) {
    this.componentInfo = this._ShowComponentsService.componentsData
    const filterdComponent:any = this.componentInfo.filter(ele => ele.Name == 'Controller');
    this.data = filterdComponent
  }
  closeDialog(e:any) {
    this._ShowComponentsService.closeDialog(this.dialogRef.id,e.path[4].id)
  }
  focus(e:any) {
    e.target.classList.add("large_Index")
    $("#Banks, #Education, #IT, #Delivery, #BI, #CRM, #Asset, #E-Commerce, #Finance, #Fleet, #GPS, #HR, #Inventory").removeClass("large_Index")
  }
  minimize(e:any) {
    $(e.path[4]).fadeOut(200)
  }
  ngOnInit(): void {}

}
