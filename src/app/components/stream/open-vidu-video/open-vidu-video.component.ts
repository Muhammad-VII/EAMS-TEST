import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { StreamManager } from 'openvidu-browser';
@Component({
  selector: 'ov-video',
  templateUrl: './open-vidu-video.component.html',
  styleUrls: ['./open-vidu-video.component.scss']
})
export class OpenViduVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild('videoElement') elementRef!: ElementRef;

  _streamManager!: StreamManager;

  ngAfterViewInit() {
      this._streamManager.addVideoElement(this.elementRef.nativeElement);
  }

  @Input()
  set streamManager(streamManager: StreamManager) {
      this._streamManager = streamManager;
      if (!!this.elementRef) {
          this._streamManager.addVideoElement(this.elementRef.nativeElement);
      }
  }


}
