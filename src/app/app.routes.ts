import { RouterModule, Router, Routes} from '@angular/router';

import { LoginComponent} from './component/login/login.component';
import { UserInfoComponent} from './component/user-info/user-info.component';
import { HomeComponent } from './component/home/home.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'releaseInfo',                                //发布完成页面
    component: LoginComponent
  },
  {
    path: 'login',                                //发布完成页面
    component: UserInfoComponent
  },
  {
    path: '**',                                //发布完成页面
    component: HomeComponent
  }
]

export const appRoutes = RouterModule.forRoot(routes);
