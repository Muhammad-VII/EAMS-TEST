import { Router } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { ShowComponentsService } from './../../../services/show-components.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatComponent } from '../../chat/chat.component';
import { FirestoreService } from 'src/app/components/services/firestore.service';
import { collection, Firestore, collectionData } from '@angular/fire/firestore';

declare const $: any;
@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TaskbarComponent implements OnInit {
  test: boolean = true;
  profileInfo: any = JSON.parse(sessionStorage.getItem('profileInfo')!);
  startMenuButtons: any = JSON.parse(sessionStorage.getItem('startMenu')!);
  taskbarTaps!: any[];
  componentsList: any = this._ComponentsService.componentsList;
  isfullscreen: any;
  date: Date = new Date();
  
  // get npw time in 24h format
  getTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hh = hours % 12 || 12;
    const mm = minutes < 10 ? '0' + minutes : minutes;
    const ss = seconds < 10 ? '0' + seconds : seconds;
    return `${hh}:${mm} ${ampm}`;
  }

  logout(): void {
    this._AuthService.currentUser.next(null)
    sessionStorage.clear()
    this._Router.navigate(['/login'])
  }
  
  constructor(
    private dialog: MatDialog,
    private _ComponentsService: ShowComponentsService,
    private _FirestoreService: FirestoreService,
    private _AuthService: AuthenticationService,
    private _Router: Router
  ) {
    const timeElement: any = document.querySelector('.time');
    setInterval(() => {
      if (timeElement) {
        timeElement.innerHTML = this.getTime();
      }
    }, 1000);

    this._ComponentsService.taskbarTaps.subscribe((icons) => {
      this.taskbarTaps = icons;
    });
  }

  shareScreen(): void {
    this._FirestoreService.getMedia()
  }

  sendCall(): void {
    this._FirestoreService.shareScreen();
  }

  openChatDialog() {
    this._ComponentsService.taskbarTaps.next([
      {
        name: 'Chat',
        icon: '../../../../../assets/shared/Chat_2_.png',
      },
    ]);
    this.dialog.open(ChatComponent, {
      hasBackdrop: false,
    });
  }

  toggleTab(e: any): void {
    const x: string = e.path[2].id;
    const y: string = x.split('_')[1];
    console.log(x, y);
    $(`#${y}`).fadeToggle(300);
  }

  closeWindow(e: any) {
    const taskbarTab = e.path[2].id;
    const bigWindow = e.path[2].id.split('_')[1];
    console.log(bigWindow);
    document.getElementById(taskbarTab)!.style.display = 'none';
    // this._MatDialogRef?.close()
    this.dialog.closeAll();
    // this.dialog.getDialogById(bigWindow)?.close(); //TODO
  }

  openDialog(
    component_name: string,
    btns?: string,
    title?: string,
    icon?: string
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


  openfullscreen() {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => {})
        .catch((err) => console.error(err));
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  changeTheme(): void {
    const taskbar: HTMLDivElement = document.querySelector(
      'footer'
    ) as HTMLDivElement;
    const startMenu: HTMLDivElement = document.querySelector(
      '.start-menu'
    ) as HTMLDivElement;
    const taskbarTaps: HTMLDivElement = document.querySelector(
      '.taskbar-tabs li a span'
    ) as HTMLDivElement;

    if (taskbar.classList.contains('dark')) {
      taskbar?.classList?.replace('dark', 'light');
      taskbarTaps?.classList?.replace('text-light', 'text-dark');
      startMenu?.classList.replace(
        'dark-glass-background',
        'light-glass-background'
      );
    } else {
      taskbar?.classList.replace('light', 'dark');
      taskbar?.classList.add('dark');
      taskbarTaps?.classList?.replace('text-dark', 'text-light');

      startMenu?.classList.replace(
        'light-glass-background',
        'dark-glass-background'
      );
    }
  }



  ngOnInit(): void {}

}
