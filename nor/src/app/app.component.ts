import { Component , ViewChild} from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	openAccountSetting:boolean = false;
	userIdRes: string = "sd";
	
  constructor( private fb: FacebookService){

  fb.init({
	appId: '356878531406171',
	version: 'v2.10',
  });
  }

  loginWithOptions() {
	
		const loginOptions: LoginOptions = {
		  enable_profile_selector: true,
		  return_scopes: true,
		  scope: 'public_profile,user_friends,email,pages_show_list'
		};
	
		this.fb.login(loginOptions)
		  .then((res: LoginResponse) => {
			console.log('Logged in', res); 
			var x=document.getElementById("adminNavAccountMenu");
			x.style.display="block";
			this.fb.api('/me')
		  .then((res: any) => {
			console.log('Got the users profile', res);
			localStorage.setItem("id", res.id);
			this.userIdRes =localStorage.getItem("id");
		  })
		  
		
		  })
		 
		 
		  .catch(this.handleError)
	  }
	  

	ngOnInit() {
	
		let localId = localStorage.getItem("id");
		if(localId){
			this.userIdRes = localId;
		}

	}

   private handleError(error) {
	 console.error('Error processing action', error);
   }
 

   overUserImage(){
	this.openAccountSetting = true;
}

outoverUserImage(){
	this.openAccountSetting = false;
}


logout(){
	
}

 }
 

