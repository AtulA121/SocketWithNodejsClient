import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { async } from '@angular/core/testing';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-specialevents',
  templateUrl: './specialevents.component.html',
  styleUrls: ['./specialevents.component.css']
})
export class SpecialeventsComponent implements OnInit {

  events : any;
  loginUser=false;
  userName:any;
  game:any;
  discription:any;
  itemId;
  deleteItemID;
  constructor(private _commonService : CommonService,private _urlService : UrlService) { }

  ngOnInit(): void {
    this._commonService.getData(this._urlService.getSpecialEventData).subscribe(res=>{
      this.events=res.result;
    });
  }

  async editItem(id){
    this.itemId=id;
    let item=await this._commonService.getDataOfItem(id,this.events);
    this.userName=item.userName;
    this.game=item.game;
    this.discription=item.discription;
    document.getElementById("myModal").style.display="block";
  }

  deleteItem(id){
    this.deleteItemID=id;
    document.getElementById("myModal2").style.display="block";
  }

  deleteItemFromServer(){
    this._commonService.deleteData(this._urlService.deleteData,{id:this.deleteItemID}).subscribe(res=>{
      if(res.result){
        document.getElementById(res.result).remove();
        document.getElementById("myModal2").style.display="none";
      }
    });
  }

  saveData(){
    var userData={
      id : this.itemId,
      userName : this.userName,
      game : this.game,
      discription : this.discription
    };

    this._commonService.saveUserData(this._urlService.saveUserData,userData).subscribe(async res=>{
      if(res.result){
        await this._commonService.updateUserInformation(res.result,this.events);
        this.closeModal(1);
      }
    });
  }

  closeModal(id){
    let ele = (id===1) ? "myModal" : "myModal2";
    document.getElementById(ele).style.display="none";
  }

}
