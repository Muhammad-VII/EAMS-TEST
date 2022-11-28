import { Component, Input, OnInit } from '@angular/core';
import { StreamManager } from 'openvidu-browser';

@Component({
  selector: 'user-video',
  templateUrl: './user-video.component.html',
  styleUrls: ['./user-video.component.scss']
})
export class UserVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
    streamManager!: StreamManager;

    getNicknameTag() { // Gets the nickName of the user
        return JSON.parse(this.streamManager.stream.connection.data).clientData;
    }

    applyFilter() {
        if (!!this.streamManager.stream.filter) {
            this.streamManager.stream.applyFilter('VB:image', { 
                url: "https://localhost:4443/virtual-background/backgrounds/office.jpeg"
            });
        } else {
            this.streamManager.stream.removeFilter();
        }
    }

}
