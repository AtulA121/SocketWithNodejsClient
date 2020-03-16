import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { EmitserviceService } from '../emitservice.service';
import { UrlService } from '../url.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password : any;
  constructor(private _commonService : CommonService,private _router : Router,private _emitService : EmitserviceService,private _urlService : UrlService) { }

  ngOnInit(): void {
  }

  loginUser(){
    let userObject={
      email : this.email,
      password : this.password
    }
    this._commonService.loginUser(this._urlService.login,userObject).subscribe((res : any)=>{
      if(res.result){
        localStorage.setItem("token",res.result.token);
        this._emitService.changeVariableValue();
        this._router.navigate([this._urlService.specialEventsUrl]);
      }
    });
  }
}
