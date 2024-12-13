
import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';






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
  {
    path: "catalog",
    title: 'Catalogo',
    component: CatalogComponent
  },
  {
    path: "catalog-detail/:id",
    title: 'Detalle pelicula',
    component: CatalogDetailComponent
  },
]
