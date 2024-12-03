
import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";






export const NavRoutes: Routes = [
  {
    path: '',
    redirectTo: "home", //ROUTES_APP.PRODUCT,
    pathMatch: 'full'
  },
  {
    path: "home",
    title: 'Inicio principal',
    component: HomeComponent//loadChildren: () => import('./../../views/nav/dashboard/dash.module').then((m) => m.DashModule)
  },
]
