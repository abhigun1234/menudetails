import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { PostrestaurentmentComponent } from './postrestaurentment/postrestaurentment.component';
import {HttpClientModule} from '@angular/common/http'
import {AuthGuard} from './auth.guard'
import {RouterModule} from '@angular/router'
import {LoginComponent} from './login/login.component'
import {RestrohomeComponent} from './restrohome/restrohome.component'
@NgModule({
  declarations: [
    AppComponent,
    PostrestaurentmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    ,RouterModule.forRoot([{path:'login',component:LoginComponent},
    {path:'home',component:RestrohomeComponent,canActivate:[AuthGuard]}])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
