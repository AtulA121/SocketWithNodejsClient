import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class CallbackSerService {

  private compInteract = new Subject<any>();
  compInteract$ = this.compInteract.asObservable();

  constructor(private _socket : WebsocketService) {

    // this._socket.addListener({
    //   type : "add",
    //   call : this.compInteract
    // });

    // this.compInteract$.subscribe(res=>{
    //   console.log(res);
    // });
  }

  getData(data){
    console.log("data successfully : ",data);
  }

}
