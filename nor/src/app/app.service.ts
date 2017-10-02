import { Injectable } from '@angular/core';
import { Http,Response, Headers } from '@angular/http';
import { Port } from './app.port';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService{

    constructor(private _http: Http){

    }
    getUserInfo():any{
        return this._http.get(Port)
          .map(( res:Response ) => res.json())
      }
 
}