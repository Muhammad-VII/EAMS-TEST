import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowComponentsService } from './../../services/show-components.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
declare const apiRTC: any;
import html2canvas from 'html2canvas';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';
import { GroupIconsComponent } from './group-icons/group-icons.component';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _ComponentsService: ShowComponentsService,
    private storage: Storage
  ) {
    const listRef = ref(this.storage, `/screenshots/screen2.png`);
    html2canvas(document.body).then(async (canvas) => {
      const data:any = canvas.toDataURL('image/png');
      // console.log(data);
      await uploadBytes(listRef, data).then((e) => {
        // console.log(e);
        getDownloadURL(listRef).then((res: any) => {
          // console.log(res);
        });
      });
    });
  }

  isCodeModalVisable = false;
  isStreamModalVisble = false;
  isConfirmLoading = false;
  taskbarTapsArray: any = [];
  componentsList: any = this._ComponentsService.componentsList;
  desktopIcons: any = JSON.parse(sessionStorage.getItem('desktopIcons')!);
  desktopGroups: any = JSON.parse(sessionStorage.getItem('desktopGroups')!);
  profileInfo: any = JSON.parse(sessionStorage.getItem('profileInfo')!);
  rightClickMenuContext: any = JSON.parse(
    sessionStorage.getItem('desktopIcons')!
  );


  showCodeModal(): void {
    this.isCodeModalVisable = true;
  }

  showStreamModal(): void {
    this.isStreamModalVisble = true;
  }


  handleCodeModalOk(): void {
    this.isCodeModalVisable = false;
    this.showStreamModal();
    this.isConfirmLoading = true;
  }

  handleCodeModalCancel(): void {
    this.isCodeModalVisable = false;
  }

  handleStreamModalOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isStreamModalVisble = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleStreamModalCancel(): void {
    this.isStreamModalVisble = false;
  }

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

        this._ComponentsService.taskbarTapsArray.push({
          name: title,
          icon: icon,
        });
        
        this._ComponentsService.taskbarTaps.next(
          this._ComponentsService.taskbarTapsArray
        );
        break;
      }
    }
  }

  openGroup(groupIcons: any[]) {
    this.dialog.open(GroupIconsComponent, {
      data: groupIcons,
    });
  }

  ngOnInit(): void {
    // document.addEventListener(
    //   'contextmenu',
    //   (e: any) => {
    //     e.preventDefault();
    //     const contextMenu: HTMLDivElement = document.querySelector(
    //       '.context-menu-wrapper'
    //     )! as HTMLDivElement;
    //     let x = e.offsetX,
    //       y = e.offsetY,
    //       winWidth = window.innerWidth,
    //       winHeight = window.innerHeight,
    //       cmWidth = contextMenu.offsetWidth,
    //       cmHeight = contextMenu.offsetHeight;
    //     x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    //     y = y > winHeight - cmHeight ? winHeight - cmHeight : y;
    //     contextMenu.style.left = `${x}px`;
    //     contextMenu.style.top = `${y}px`;
    //     contextMenu.style.visibility = 'visible';
    //   },
    //   false
    // );
    // document.addEventListener('click', () => {
    //   const contextMenu: HTMLDivElement = document.querySelector(
    //     '.context-menu-wrapper'
    //   )! as HTMLDivElement;
    //   contextMenu.style.visibility = 'hidden';
    // });
  }
}
