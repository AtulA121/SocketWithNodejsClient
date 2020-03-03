import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class InterrupthttpService implements HttpInterceptor {

  constructor(private _commonService : CommonService) { }

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    const token = this._commonService.getToken();
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.set('authtoken', token);
    }
    const authReq = req.clone({headers: newHeaders});
    return next.handle(authReq);
  }
}
