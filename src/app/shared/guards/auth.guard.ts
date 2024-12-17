import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(Auth); // Servicio de autenticación
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    // Observa el estado del usuario
    onAuthStateChanged(auth, (user) => {
      const targetUrl = state.url;

      // Si el usuario está autenticado y trata de acceder a /signin, redirigir a /home
      if (user && targetUrl === '/signin') {
        console.log('Usuario autenticado, redirigiendo a /home');
        router.navigate(['/app/home']); // Redirigir a /home
        resolve(false); // No permitir el acceso a /signin
        return;
      }

      // Permitir acceso directo a la página de inicio de sesión
      if (targetUrl === '/signin') {
        resolve(true);
        return;
      }

      if (user) {
        console.log(user);
        resolve(true); // Usuario autenticado, permite acceso
      } else {
        console.log('No autenticado, redirigiendo a /signin');
        router.navigate(['/signin']); // Usuario no autenticado, redirige
        resolve(false);
      }
    });
  });
};


