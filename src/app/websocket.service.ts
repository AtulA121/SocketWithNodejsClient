import { Injectable } from '@angular/core';
import * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket : any;
  listeners=[];
  socketUrl : any="ws://localhost:3300/event?token="; 
   
  constructor() {
  }

  async getInstance(token){
    if(this.socket===undefined){
      this.socket=await io(this.socketUrl+""+token);
      this.handleWebSocket();
    }
    return this.socket;
  }

  handleWebSocket(){
    this.socket.on("open",(data: any)=>{
      this.onOpen(data);
    });

    this.socket.on("message",(data: any)=>{
      this.onMessage(data);
    });

    this.socket.on("disconnect",(data: any)=>{
      this.onClose(data);
    });
  }

  private onOpen(obj: any){
    console.log("connection opend : ",obj);
  }

  sendMessage(token : any,obj: string){
    let sockObj={
      token : token,
      data : obj
    };
    this.socket.emit("message",JSON.stringify(sockObj));
  }

  private onMessage(obj: string){
    console.log("message received : ",JSON.parse(obj));

    this.listeners.forEach((key,index)=>{
      key.call.next(JSON.parse(obj));
    })
  }

  private onClose(obj: any){
    console.log("connection closed : ",obj);
    this.socket=undefined;
  }

  socketClosed(){
    this.socket.close();
  }

  addListener(obj){
    this.listeners.push(obj);
  }
}
