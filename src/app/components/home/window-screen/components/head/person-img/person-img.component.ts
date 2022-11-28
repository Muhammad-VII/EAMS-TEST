import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-person-img',
  templateUrl: './person-img.component.html',
  styleUrls: ['./person-img.component.scss']
})
export class PersonImgComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<PersonImgComponent>) { }
  close() {
    this._dialogRef.close()
  }
  ngOnInit(): void {
  }

}
