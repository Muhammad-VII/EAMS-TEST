import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
@Component({
  selector: 'app-details-grid',
  templateUrl: './details-grid.component.html',
  styleUrls: ['./details-grid.component.scss']
})
export class DetailsGridComponent implements OnInit, AfterViewInit {
  @Input() key!: number;

  dataSource!: DataSource;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource = new DataSource({
      store: AspNetData.createStore({
        loadUrl: 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi/OrderDetails',
        loadParams: { orderID: this.key },
        onBeforeSend(method, ajaxOptions) {
          ajaxOptions.xhrFields = { withCredentials: true };
        },
      }),
    });
  }

}
