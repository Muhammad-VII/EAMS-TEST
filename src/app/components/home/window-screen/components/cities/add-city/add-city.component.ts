import { MatDialogRef } from '@angular/material/dialog';
import { Observer, Observable } from 'rxjs';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { getDownloadURL, uploadBytes, ref, getStorage } from '@angular/fire/storage';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  isEditable = false;
  switchValue = false;
  selectedFile: any = null;
  imgUrl: any = null;
  users: any[] = [];
  date = null;
  buttons: any[] = [];
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  constructor(private MatDialogRef: MatDialogRef<AddCityComponent>) {}
  loading = false;
  avatarUrl?: string;
  beforeUpload = (
    file: NzUploadFile,
    _fileList: NzUploadFile[]
  ): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        // this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        // this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
  async onFileSelected(file: any) {
    console.log(file.target.files[0]);
    this.selectedFile = file.target.files[0];
    const storage = getStorage();
    const listRef = ref(
      storage,
      `/Desktop/Component/Icon/${this.selectedFile.name}/`
    );
    const imgElement = (await document.getElementById(
      'previwe-img'
    )) as HTMLImageElement;
    await uploadBytes(listRef, this.selectedFile).then(async () => {
      getDownloadURL(listRef).then((res) => {
        imgElement.setAttribute('src', res);
        this.imgUrl = res;
      });
    });
  }

  close(): void {
    this.MatDialogRef.close();
  }

  ngOnInit(): void {}

  submitData(): void {
    //TODO SEND IMG URL TO OUR API
  }

  addButton() {
    this.buttons.push({});
  }

  removeButton(i: number) {
    this.buttons.splice(i, 1);
  }

  addUser() {
    this.users.push({}); //push empty object of type user
  }

  removeUser(i: number) {
    this.users.splice(i, 1);
  }

  focus(e: any) {
    e.target.classList.add('large_Index');
    $(
      '#Banks, #Education, #IT, #Delivery, #BI, #CRM, #Asset, #E-Commerce, #Finance, #Fleet, #GPS, #HR, #Inventory'
    ).removeClass('large_Index');
  }

  minimize(e: any) {
    $(e.path[4]).fadeOut(200);
  }
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

}
