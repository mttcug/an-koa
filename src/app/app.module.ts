import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

import {appRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ComputerSortComponent } from './component/computer-sort/computer-sort.component';
import { EnglistSortComponent } from './component/englist-sort/englist-sort.component';
import { HobbySortComponent } from './component/hobby-sort/hobby-sort.component';
import { MutePageComponent } from './component/mute-page/mute-page.component';
import { NgShowDirective } from './directive/ng-show.directive';
import { NgxBaiduMapComponent } from './component/common/ngx-baidu-map/ngx-baidu-map.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ComputerSortComponent,
    EnglistSortComponent,
    HobbySortComponent,
    MutePageComponent,
    NgShowDirective,
    NgxBaiduMapComponent
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
