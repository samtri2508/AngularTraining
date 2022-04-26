import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor ,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
   
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        if(request.method == 'GET') { 
            const params = new HttpParams()
            .set('db_token', 'get12356');
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer :1587956`,
                        'Content-Type':  'multipart/form-data;boundary='+Math.random() 
                    }, params
                });
           } else  {
            if (request.body instanceof FormData) { 
                const data = {'db_token': `FORMDATA45896`}
                 request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer : 15468987`,
                        'Content-Type':  'multipart/form-data;boundary='+Math.random()//'x-www-form-urlencoded'//'multipart/form-data;boundary='+Math.random()   //x-www-form-urlencoded   multipart/data
                        
                    },body :  request.body.append('db_token', `FR5445`) 
                });

            }else {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer : 4154565265`
                    },
                    body : {...request.body , 'db_token': `pOST1596` } 
                    
                    //body : request.body.append('db_token', `${user.db_token}`)
                });
            }
                  
            }

        console.log(request);

        return next.handle(request);
    }
}