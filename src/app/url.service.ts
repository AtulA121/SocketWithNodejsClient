import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }
    local="http://localhost:3000/";
    createEvent = this.local+"createEvent";
    login = this.local+"loginUser";
    getEventData=this.local+"getEventData";
    getSpecialEventData=this.local+"getSpecialEventData";
    saveUserData=this.local+"saveUserData";
    deleteData=this.local+"deleteData";
    registerUser=this.local+"registerUser";
    loginUrl="/login";
    specialEventsUrl="/specialEvents";
    logoutUrl=this.local+"logoutUser";
}
