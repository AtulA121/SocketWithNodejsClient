import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitserviceService {

  constructor() { }

  private changeVariable = new Subject<string>();
  changeVariable$=this.changeVariable.asObservable();

  private eventData = new Subject<string>();
  eventData$=this.eventData.asObservable();

  changeVariableValue(){
    this.changeVariable.next("changed");
  }

  getEventsData(){
    this.eventData.next("changed");
  }

}
