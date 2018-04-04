import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  doLogin(username: string, password: string) {
    let url = 'http://localhost:3000/login';
    return this.http.post(url, {
      username: username,
      password: password
    });
  }

}
