import { RouterModule , Route } from "@angular/router";
import { loginComponent } from "./component/login.component";

const route : Route = [
    {path:'', redirectTo : 'login' ,pathMatch: 'full' },
    {path : '/login' , component : loginComponent }
]

export const appRoute = route;