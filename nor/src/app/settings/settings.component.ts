import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams,LoginResponse } from 'ngx-facebook';
import { NgModel } from '@angular/forms';
import {Http} from '@angular/http'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor( private http: Http) { 

  }
 
  ngOnInit() {
   
   
  
  }
  input(){
  var input1= <HTMLInputElement>document.getElementById("name");
  input1.value="ss";
  }

  
  
  

}
