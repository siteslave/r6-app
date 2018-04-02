import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MemberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MemberProvider Provider');
  }

  getMembers() {
    let url = 'https://randomuser.me/api/?results=10';
    return this.http.get(url);
  }

}
