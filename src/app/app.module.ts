import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {appRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { HomeComponent } from './component/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserInfoComponent,
    SidebarComponent
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
