import { ref, getStorage, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AddBtnComponent } from './add-btn/add-btn.component';
import { ShowComponentsService } from 'src/app/components/services/show-components.service';
declare const $:any


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  selectedFile:any = null
  imgUrl:any = null
  users: any[] = [];
  buttons: any[] = [];
  constructor(private MatDialogRef:MatDialogRef<AddComponent>, private _Dialog: MatDialog, private _ShowComponentsService: ShowComponentsService) { }
  openAdd(): void {
    this._Dialog.open(AddBtnComponent, {
      hasBackdrop: false
    })
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
  
  close(e:any) {
    this._ShowComponentsService.closeDialog(this.MatDialogRef.id,e.path[4].id)
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
