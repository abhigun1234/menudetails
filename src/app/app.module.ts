import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { PostrestaurentmentComponent } from './postrestaurentment/postrestaurentment.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'

import {RouterModule} from '@angular/router'
 
import {RestrohomeComponent} from './restrohome/restrohome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    PostrestaurentmentComponent,
    AboutusComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
