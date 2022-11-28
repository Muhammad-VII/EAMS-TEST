import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const $:any;
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

  }

}
