import { RouterModule, Router, Routes} from '@angular/router';


import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ComputerSortComponent } from './component/computer-sort/computer-sort.component';
import { EnglistSortComponent } from './component/englist-sort/englist-sort.component';
import { HobbySortComponent } from './component/hobby-sort/hobby-sort.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'computer',
    pathMatch: 'full'
  },
  {
    path: 'computer',
    component: ComputerSortComponent
  },
  {
    path: 'english',                                //发布完成页面
    component: EnglistSortComponent
  },
  {
    path: 'hobby',                                //发布完成页面
    component: HobbySortComponent
  },
  {
    path: '**',                                //发布完成页面
    component: ComputerSortComponent
  }
]

export const appRoutes = RouterModule.forRoot(routes);
