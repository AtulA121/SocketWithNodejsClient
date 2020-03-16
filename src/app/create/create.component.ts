import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userName : any;
  game:any;
  discription : any;

  constructor(private _commonService : CommonService,private _router : Router,private _urlService : UrlService) { }

  ngOnInit(): void {
  }

  createEvent(){
    let userObject={
      userName : this.userName,
      game : this.game,
      discription : this.discription
    }
    this._commonService.createEvent(this._urlService.createEvent,userObject).subscribe((res : any)=>{
      if(res.result){
        this._router.navigate([this._urlService.specialEventsUrl]);
      }
    });
  }

}
