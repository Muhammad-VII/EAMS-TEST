import { ShowComponentsService } from './../../../services/show-components.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-group-icons',
  templateUrl: './group-icons.component.html',
  styleUrls: ['./group-icons.component.scss'],
})
export class GroupIconsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog,
    private _ComponenetService: ShowComponentsService
  ) {
  }
  componentsList: any = this._ComponenetService.componentsList;

  openDialog(
    component_name: string,
    btns: string,
    title: string,
    icon: string
  ) {
    for (const key in this.componentsList) {
      if (
        Object.prototype.hasOwnProperty.call(
          this.componentsList,
          component_name
        )
      ) {
        this.dialog.open(this.componentsList[component_name], {
          hasBackdrop: false,
          data: [btns],
        });

        this._ComponenetService.taskbarTapsArray.push({
          name: title,
          icon: icon,
        });
        this._ComponenetService.taskbarTaps.next(
          this._ComponenetService.taskbarTapsArray
        );
        break;
      }
    }
  }

  ngOnInit(): void {}
}
