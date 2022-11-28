import { BehaviorSubject } from 'rxjs';
import {
  ViewChild,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ShowComponentsService } from 'src/app/components/services/show-components.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PersonImgComponent } from '../head/person-img/person-img.component';
import { AddComponent } from '../head/add/add.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

const FRUITS: string[] = [
  'Lorem ipsum @dolor.com',
  'Olivia ipsum @dolor.com',
  'Jack ipsum @dolor.com',
  'Charlotte ipsum @dolor.com',
  'Atticus ipsum @dolor.com',
  'Lorem ipsum @dolor.com',
  'Theodore ipsum @dolor.com',
  'Lorem ipsum @dolor.com',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
const Status: string[] = [
  'aaaa',
  'sss',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

declare const $: any;
@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss'],
})
export class SmsComponent implements OnInit {
  openPreviwe(): void {
    this._Dialog.open(PersonImgComponent, {
      hasBackdrop: false,
    });
  }
  displayedColumns: string[] = [
    'actions',
    'status',
    'icon',
    'name',
    'title',
    'model',
  ];
  dataSource!: MatTableDataSource<UserData>;
  openAddDialog(): void {
    this._Dialog.open(AddComponent, {
      hasBackdrop: false,
    });
  }
  showWindow: boolean = false;
  arr: never[] = [];
  componentInfo: any[];
  btnsPermision: any;
  showAdd = new BehaviorSubject(false);
  showReport = new BehaviorSubject(false);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialogRef: MatDialogRef<SmsComponent>,
    private _ShowComponentsService: ShowComponentsService,
    private _Dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public buttonsAvalible: any[]
  ) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.componentInfo = this._ShowComponentsService.componentsData;
  }
  closeDialog(e: any) {
    this._ShowComponentsService.closeDialog(this.dialogRef.id, e.path[4].id);
  }
  focus(e: any) {
    e.target.classList.add('large_Index');
    $(
      '#Asset, #Education, #IT, #Delivery, #BI, #CRM, #Controller, #E-Commerce, #Finance, #Fleet, #GPS, #HR, #Inventory'
    ).removeClass('large_Index');
  }
  minimize(e: any) {
    $(e.path[4]).fadeOut(300);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {}
}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
