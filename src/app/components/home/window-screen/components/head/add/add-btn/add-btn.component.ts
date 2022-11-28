import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { AddComponent } from '../add.component';
declare const $:any;
@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {

  selectedFile:any = null
  imgUrl:any = null
  users: any[] = [];
  buttons: any[] = [];
  constructor(private MatDialogRef:MatDialogRef<AddBtnComponent>, private _Dialog: MatDialog) { }
  openAdd(): void {
    this._Dialog.open(AddBtnComponent)
  }
  async onFileSelected(file:any) {
    this.selectedFile = file.target.files[0]
    const storage = getStorage();
    const listRef = ref(storage, `/Desktop/Component/Icon/${this.selectedFile.name}/`);
    const imgElement = document.getElementById('previwe-img') as HTMLImageElement
    await uploadBytes(listRef,this.selectedFile).then(async () => {
      getDownloadURL(listRef).then((res) => {
        imgElement.setAttribute('src',res)
        this.imgUrl = res
      })
    })
  }
  
  close(): void {
    this.MatDialogRef.close()
  }

  ngOnInit(): void {
  }

  submitData(): void {
    //TODO SEND IMG URL TO OUR API
  }

  addButton() {
    this.buttons.push({})
  }

  removeButton(i: number) {
    this.buttons.splice(i, 1)
  }

  addUser(){
    this.users.push({});//push empty object of type user
  }

  removeUser(i: number){
    this.users.splice(i, 1);    
  }

  focus(e:any) {
    e.target.classList.add("large_Index")
    $("#Banks, #Education, #IT, #Delivery, #BI, #CRM, #Asset, #E-Commerce, #Finance, #Fleet, #GPS, #HR, #Inventory").removeClass("large_Index")
  }
  
  minimize(e:any) {
    $(e.path[4]).fadeOut(200)
  }

}
