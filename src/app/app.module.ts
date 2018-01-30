import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap';

import {appRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ComputerSortComponent } from './component/computer-sort/computer-sort.component';
import { EnglistSortComponent } from './component/englist-sort/englist-sort.component';
import { HobbySortComponent } from './component/hobby-sort/hobby-sort.component';






@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ComputerSortComponent,
    EnglistSortComponent,
    HobbySortComponent
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
