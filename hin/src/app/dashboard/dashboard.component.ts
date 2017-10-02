import { Component, OnInit,OnDestroy } from '@angular/core';

import { FacebookService, InitParams,LoginResponse } from 'ngx-facebook';
import { HttpService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[HttpService]
})
export class DashboardComponent implements OnInit  {

	constructor(private _service: HttpService){
	
	}

	ngOnInit() {
		this.getUser()
	}
	getUser():any{
		this._service.getUserInfo()
			.subscribe(result =>{
				console.log(result.data)
			},
			// err => alert("Error " + err.status)
		 );
	}
}