// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { GitsearchFormComponent } from 'src/app/gitsearch-form/gitsearch-form.component';
// import { RepositoriesComponent } from 'src/app/repositories/repositories.component'
// import { AppComponent } from 'src/app/app.component';
// import { GitsearchComponent } from 'src/app/gitsearch/gitsearch.component';
// import {FormsModule} from '@angular/forms';


// @Injectable()
// export class GitsearcherService {

//   private username:string;
//   private clientdetails: string ='1107b3f089aeaec0448a9cb97509caeb97dbad89';

//   constructor( private http:HttpClient) {
//   console.log("service is now ready");

// }
// getProfileInfo(username){
//   console.log(this.username)
//   return this.http.get("https://api.github.com/users/" + username + "?access_token=" + this.clientdetails)

// }
// getRepoInfo(){
//   return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + this.clientdetails)
// }
// updateProfile(username:string){
//   this.username = username;
// }
//  }
