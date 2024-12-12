import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  // Registrar usuario
  register(email: any, password: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Iniciar sesión
  login(email: any, password: any): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(async (userCredential) => {
        const token = await userCredential.user.getIdToken();
        localStorage.setItem('authToken', token);
      });
  }


  // Cerrar sesión
  logout() {
    return signOut(this.auth).then(() => {
      localStorage.removeItem('authToken');
      this.router.navigate(['/login']);
    });
  }

  // Obtener usuario autenticado
  getUser() {
    return this.auth.currentUser;
  }
}

