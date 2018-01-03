import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from "./component/app.component";
import { loginComponent } from "./component/login.component";

import { appRoute } from "./app-routes";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoute)
    ],
    declarations:[
        AppComponent,
        loginComponent
    ],
    providers:[

    ],
    bootstrap:[AppComponent]
})

export class AppModule {};