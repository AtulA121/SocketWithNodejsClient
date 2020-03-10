import { Injectable } from '@angular/core';
import * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket : any;
  listeners=[];
  socketUrl : any="ws://localhost:3000/event?token="; 
   
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

  onOpen(obj: any){
    console.log("connection opend : ",obj);
    this.listeners.forEach((obj)=>{
      console.log(obj.call());
    });
  }

  sendMessage(token : any,obj: string){
    let sockObj={
      token : token,
      data : obj
    };
    this.socket.emit("message",JSON.stringify(sockObj));
  }

  onMessage(obj: string){
    console.log("message received : ",JSON.parse(obj));
  }

  onClose(obj: any){
    console.log("connection closed : ",obj);
  }

  socketClosed(){
    this.socket.close();
    this.socket=undefined;
  }

  addListener(obj: { topic: number; call: () => void; }){
    this.listeners.push(obj);
  }
}
