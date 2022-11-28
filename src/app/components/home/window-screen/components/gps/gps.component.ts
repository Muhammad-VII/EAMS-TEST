import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShowComponentsService } from 'src/app/components/services/show-components.service';
declare const $:any;
@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss']
})
export class GpsComponent implements OnInit {
  componentInfo:any[];
  data:any[];
  constructor(
    public dialogRef: MatDialogRef<GpsComponent>,
    private _ShowComponentsService: ShowComponentsService
  ) {
    this.componentInfo = this._ShowComponentsService.componentsData
      const filterdComponent:any = this.componentInfo.filter(ele => ele.Name == 'GPS');
      this.data = filterdComponent
  }
  closeDialog(e:any) {
    this._ShowComponentsService.closeDialog(this.dialogRef.id,e.path[4].id)
  }
  focus(e:any) {
    e.target.classList.add("large_Index")
    $("#Asset, #Education, #IT, #Delivery, #BI, #Banks, #Controller, #E-Commerce, #Finance, #Fleet, #HR, #Inventory").removeClass("large_Index")
  }
  showWindow: boolean = true;
  minimize(e:any) {
    $(e.path[4]).fadeOut(200)
  }
  ngOnInit(): void {}


}
