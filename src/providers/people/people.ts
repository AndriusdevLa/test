import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";




/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class People {




constructor(public http: HttpClient) {
  console.log('Http works')
}

  getPeople(): Observable<any> {
    return this.http.get("https://randomuser.me/api/?results=10")
  }
}
