import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { } 

  checkLogin(postData : any) {
    return this.httpClient.post('https://buildwebsite.co.in/Demo/angular-js/store-data.php',postData);
  }

  getData() {
    return this.httpClient.get('https://buildwebsite.co.in/Demo/angular-js/get-data.php');
  }
  

}
