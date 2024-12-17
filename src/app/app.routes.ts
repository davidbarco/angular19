import { Routes } from '@angular/router';
import { NavLayoutComponent } from './shared/components/layouts/nav-layout/nav-layout/nav-layout/nav-layout.component';
import { authGuard } from './shared/guards/auth.guard';
import { NotFoundComponent } from './views/not-found/not-found.component';




// Define las rutas
export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./views/sessions/sessions.routes').then((m) => m.sessionsRoutes),
  },
  {
    path: 'app',
    canActivate: [authGuard],
    component: NavLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/nav/nav.routes').then((m) => m.NavRoutes),

      }
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Página no encontrada'
  }
];
