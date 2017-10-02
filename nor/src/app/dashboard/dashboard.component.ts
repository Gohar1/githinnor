import { Component, OnInit,OnDestroy } from '@angular/core';
import {Http} from '@angular/http';

import { FacebookService, InitParams,LoginResponse } from 'ngx-facebook';
// import { HttpService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[]
})
export class DashboardComponent implements OnInit  {
	data ={
		"suggestion": "",
		"description": "",
	}
	constructor(private http: Http){
	
	}
	url = "http://localhost:3000/posts";
	
	
	createpost(a,b){
		
		this.data.suggestion=a;
		this.data.description=b;
		
		
		console.log(this.data);	
		this.http.post(this.url,this.data).subscribe(data => {
			this.data = data['data'];
		});
		err => {
			console.log('Something went wrong!');
		  }
			
	}

	ngOnInit() {
		
	}


	opendropdown(){
		var options=document.getElementById("options");
		if (options.style.display == "block") {
			options.style.display = "none";
		}
		else {
			
			options.style.display = "block";
			options.setAttribute('class', 'dropdown card open');
		}
		
}
}