import { Injectable } from "@angular/core";
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  // Registrar usuario
  register(email: any, password: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Iniciar sesión
  login(email: any, password: any): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      async (userCredential) => {
        const token = await userCredential.user.getIdToken();
        localStorage.setItem("authToken", token);
      }
    );
  }

  resetPassword(email: any): Promise<void> {
    return sendPasswordResetEmail(this.auth, email)
      .then((resp) => {
        console.log("Correo enviado con éxito:", resp);
      })
      .catch((error) => {
        console.log(error);
        // Manejo de errores
        let errorMessage =
          "Ocurrió un error al intentar restablecer la contraseña.";

        // Diferenciar los tipos de error según el código de Firebase
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "El correo electrónico proporcionado no es válido.";
            break;
          case "auth/user-not-found":
            errorMessage =
              "No se encontró un usuario con ese correo electrónico.";
            break;
          default:
            errorMessage = error.message;
        }

        console.error(
          "Error al enviar el correo de restablecimiento:",
          errorMessage
        );
        throw new Error(errorMessage); // Lanza el error para manejarlo más arriba si es necesario
      });
  }

  // Cerrar sesión
  logout() {
    return signOut(this.auth).then(() => {
      localStorage.removeItem("authToken");
      this.router.navigate(["/signin"]);
    });
  }

  // Obtener usuario autenticado
  getUser() {
    return this.auth.currentUser;
  }
}
