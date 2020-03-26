import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { UrlService } from '../url.service';
import { WebsocketService } from '../websocket.service';
import { EmitserviceService } from '../emitservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CallbackSerService } from '../callback-ser.service';

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
  socket;

  private compInteract = new Subject<any>();
  compInteract$ = this.compInteract.asObservable();

  constructor(private _commonService : CommonService, private _urlService : UrlService, private _socket : WebsocketService, private _eventEmmiter : EmitserviceService, private _activatedRoute : ActivatedRoute, private _router : Router,private _callbackSer : CallbackSerService) {
    this.socket=this._socket.getInstance(this._commonService.getToken());

    this._socket.addListener({
      type : "add",
      call : this.compInteract
    });

    this.compInteract$.subscribe(res=>{
      console.log("message through socket to specialEvents : ",res);
      this.getedData(res);
    });

  }

  getedData(res){
    this._callbackSer.getData(res);
  }

  ngOnInit(): void {
    this._activatedRoute.url.subscribe(url=>{
      console.log("-------- active route : ",url[0]," , ",this._router.url);
    });
    let timer=setInterval(()=>{
      if(this._socket.getInstance(this._commonService.getToken())!==undefined){
        clearInterval(timer);
        this.getSpecialsEvents();
      }
      console.log("interval going on : ");
    },100);

    // this._socket.addListener({
    //   topic : 1,
    //   call : this._eventEmmiter.getEventsData
    // });
  }

  getSpecialsEvents(){
    this._socket.sendMessage(this._commonService.getToken(),"getSpecialEvents : ");
    this._commonService.getData(this._urlService.getSpecialEventData).subscribe((res : any)=>{
      this.events=res.result;
    });
  }

  async editItem(id){
    this.itemId=id;
    let item : any;
    item=await this._commonService.getDataOfItem(id,this.events);
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
    console.log(this.deleteItemID);
    this._socket.sendMessage(this._commonService.getToken(),"delete event : ");
    this._commonService.deleteData(this._urlService.deleteData,{id:this.deleteItemID}).subscribe((res : any)=>{
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
    this._socket.sendMessage(this._commonService.getToken(),"edit event : ");
    this._commonService.saveUserData(this._urlService.saveUserData,userData).subscribe(async (res : any)=>{
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
