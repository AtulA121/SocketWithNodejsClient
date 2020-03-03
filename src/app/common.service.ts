import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http : HttpClient) { }

  getData(url){
    return this._http.get(url);
  }

  registerUser(url,obj){
    return this._http.post(url,obj);
  }

  loginUser(url,obj){
    return this._http.post(url,obj);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  deleteData(url,obj){
    console.log(obj);
    return this._http.post(url,obj);
  }

  saveUserData(url,obj){
    return this._http.post(url,obj);
  }

  async getDataOfItem(id,items){
    let result={};
    for(let i=0;i<items.length;i++){
      if(await this.getDataResult(id,items[i])){
        result=items[i];
      }
    }
    return result;
  }

  async updateUserInformation(obj,items){
    let result=false;
    for(let i=0;i<items.length;i++){
      if(await this.getDataResult(obj.id,items[i])){
        items[i].userName=obj.userName;
        items[i].game=obj.game;
        items[i].discription=obj.discription;
        result=true;
      }
    }
    return result;
  }

  getDataResult(id,itemIs){
    let result=false;
    if(id === itemIs.id){
      result=true;
    }
    return result;
  }

  createEvent(url,obj){
    return this._http.post(url,obj);
  }

}
