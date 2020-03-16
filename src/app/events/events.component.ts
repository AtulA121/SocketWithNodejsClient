import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { UrlService } from '../url.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events : any;
  loginUser=false;
  constructor(private _commonService : CommonService,private _urlService : UrlService) { }

  ngOnInit(): void {
    this._commonService.getData(this._urlService.getEventData).subscribe((res : any)=>{
      this.events=res.result;
    });
  }

}
