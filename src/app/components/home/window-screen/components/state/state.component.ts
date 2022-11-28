import { BehaviorSubject } from 'rxjs';
import { AddstateComponent } from './addstate/addstate.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ShowComponentsService } from 'src/app/components/services/show-components.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
declare const $: any;

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
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

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  src = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`;
  placeholder =
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';

  onReload(): void {
    this.src = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${new Date()}`;
  }
  country: boolean = true
  displayedColumns: string[] = [
    'actions',
    'status',
    'name',
    'country',
    'gmt',
    "capital"
  ];
  dataSource!: MatTableDataSource<UserData>;
  openAddDialog(): void {
    this._Dialog.open(AddstateComponent, {
      hasBackdrop: false,
    });
  }
  showWindow: boolean = false;
  arr: never[] = [];
  componentInfo: any[];
  data: any[];
  btnsPermision: any[];
  showAdd = new BehaviorSubject(false)
  showReport = new BehaviorSubject(false)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialogRef: MatDialogRef<StateComponent>,
    private _ShowComponentsService: ShowComponentsService,
    private _Dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public expoPermision: any[]
    ) {
      this.btnsPermision = expoPermision;
      if(this.btnsPermision.includes("Add")) {
        this.showAdd.next(true)
      } else if (this.btnsPermision.includes("Report")) {
        this.showReport.next(true)
      }
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.componentInfo = this._ShowComponentsService.componentsData;
    const filterdComponent: any = this.componentInfo.filter(
      (ele) => ele.Name == 'Banks'
    );
    this.data = filterdComponent;
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
