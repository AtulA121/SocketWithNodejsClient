import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitserviceService } from './emitservice.service';
import { CommonService } from './common.service';
import { WebsocketService } from './websocket.service';
import { UrlService } from './url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CrudEample';
  loginUser=false;

  constructor(private _rotuer : Router,private _emitService : EmitserviceService,private _commonService : CommonService,private urlService : UrlService,private _socket : WebsocketService){
    
    this._emitService.changeVariable$.subscribe(res=>{
      this.loginUser=true;
    });
    if(this._commonService.getToken()){
      this.loginUser=true;
    }
  }

  ngOnInit(){
  }

  logoutUser(){
    this._commonService.logoutUser(this.urlService.logoutUrl).subscribe(res=>{
      this.loginUser=false;
      this._socket.socketClosed();
      localStorage.removeItem("token");
      this._rotuer.navigate(["/login"]);
    });
  }

}
