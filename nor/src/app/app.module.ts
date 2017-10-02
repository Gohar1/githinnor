import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { routes,declaration } from './app.router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
  declarations: declaration,
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    FacebookModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }