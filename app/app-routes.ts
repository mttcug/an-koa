import { RouterModule , Routes } from "@angular/router";
import { loginComponent } from "./component/login.component";

const route : Routes = [
    {path:'', redirectTo : 'login' ,pathMatch: 'full' },
    {path : '/login' , component : loginComponent }
]

export const appRoute = route;