import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor() { }

  getUserLoggedIn(){
    let result=false;
    if(localStorage.getItem("token")){
      result=true;
    }
    return result;
  }

}
