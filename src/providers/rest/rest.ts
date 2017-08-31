import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestProvider {

  private baseApi = "http://127.0.0.1/html/Dropbox/restApi/public";

  constructor(public http: Http) {
    //console.log('Hello RestProvider Provider');
  }

  public setLogin () {
    return this.http.get(this.baseApi + "/login").map(response => response.json());
  }

}
