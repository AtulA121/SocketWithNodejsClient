import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { UrlService } from '../url.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName : any;
  email:any;
  password : any;

  constructor(private _commonService : CommonService,private _router : Router,private _urlService : UrlService) { }

  ngOnInit(): void {
  }

  registerUser(){
    let userObject={
      userName : this.userName,
      email : this.email,
      password : this.password
    }
    this._commonService.registerUser(this._urlService.registerUser,userObject).subscribe((res : any)=>{
      if(res.result){
        this._router.navigate([this._urlService.loginUrl]);
      }
    });
  }

}
