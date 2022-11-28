import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.scss']
})
export class UserImgComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<UserImgComponent>) { }
  close() {
    this._dialogRef.close()
  }
  ngOnInit(): void {
  }

}
