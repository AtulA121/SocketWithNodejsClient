import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitserviceService {

  constructor() { }

  private changeVariable = new Subject<string>();
  changeVariable$=this.changeVariable.asObservable();

  changeVariableValue(){
    this.changeVariable.next("changed");
  }

}
