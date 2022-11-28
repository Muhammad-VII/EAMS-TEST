import { ShowComponentsService } from './../../../../services/show-components.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
declare const $: any;

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
    componentInfo:any[];
    data:any[];
    constructor(public dialogRef: MatDialogRef<EducationComponent>, private _ShowComponentsService: ShowComponentsService) {
      this.componentInfo = this._ShowComponentsService.componentsData
      const filterdComponent:any = this.componentInfo.filter(ele => ele.Name == 'Education');
      this.data = filterdComponent
    }
    closeDialog(e:any) {
      this._ShowComponentsService.closeDialog(this.dialogRef.id,e.path[4].id)
    }
    minimize(e:any) {
      $(e.path[4]).fadeOut(200)
    }
    focus(e:any) {
      e.target.classList.add("large_Index")
      $("#Asset, #IT, #Delivery, #BI, #Banks, #Controller, #E-Commerce, #Finance, #Fleet, #GPS, #HR, #Inventory").removeClass("large_Index")
    }
    
    ngOnInit(): void {}

}
