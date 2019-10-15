import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //how to update the request Parameters
      const updatedRequest = req.clone({
        headers: req.headers.set("Authorization", "Some-dummyCode")
      });
      //logging the updated Parameters to browser's console
      console.log("Before making api call : ", updatedRequest);
      return next.handle(req).pipe(
        tap(
          event => {
            //logging the http response to browser's console in case of a success
            if (event instanceof HttpResponse) {
              console.log("api call success :", event);
            }
          },
          error => {
            //logging the http response to browser's console in case of a failuer
            if (event instanceof HttpResponse) {
              console.log("api call error :", event);
            }
          }
        )
      );
    }
    
}
