import { Routes } from '@angular/router';


// Importa tus componentes aquí
import { SessionsSigninComponent } from './sessions-signin/sessions-signin.component';
import { SessionsRegisterComponent } from './sessions-register/sessions-register.component';



// Define las rutas
export  const sessionsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SessionsSigninComponent,
    title: 'Inicio de sesión'
  },
  {
    path: 'register',
    component: SessionsRegisterComponent,
    title: 'Registro'
  },
];
