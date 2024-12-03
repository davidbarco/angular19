import { Routes } from '@angular/router';
import { NavLayoutComponent } from './shared/components/layouts/nav-layout/nav-layout/nav-layout/nav-layout.component';




// Define las rutas
export const routes: Routes = [
  {
    path: '',
    //canActivate: [UserIsNotLoggedIn],  //luego cambiarlo por el redirect platzi.
    loadChildren: () => import('./views/sessions/sessions.routes').then((m) => m.sessionsRoutes),
  },
  {
    path: 'app',
    //canActivate: [UserIsLoggedIn],
    component: NavLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/nav/nav.routes').then((m) => m.NavRoutes),

      }
    ],
  },
];
