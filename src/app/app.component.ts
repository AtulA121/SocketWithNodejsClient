import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmitserviceService } from './emitservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudEample';
  loginUser=false;
  constructor(private _rotuer : Router,private _emitService : EmitserviceService){
    this._emitService.changeVariable$.subscribe(res=>{
      this.loginUser=true;
    });
  }

  logoutUser(){
    this.loginUser=false;
    localStorage.removeItem("token");
    this._rotuer.navigate(["/login"]);
  }

}
