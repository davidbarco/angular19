import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LogoComponent } from "../logo/logo.component";
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from "../button/button.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from "../spinner/spinner.component";
import { AuthService } from '../../services/auth.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import {ModalIcon } from '../../enum/modal.enum';

@Component({
  selector: 'app-form-register',
  imports: [
      LogoComponent,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      CommonModule,
      MatIconModule,
      ButtonComponent,
      SpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

  spinner = signal(false);
  errorMessage = signal('');
  hide = signal(true);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    // Validar email en tiempo real
    this.form.get('email')?.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    const emailControl = this.form.get('email');
    if (emailControl?.hasError('required')) {
      this.errorMessage.set('Debes ingresar un correo.');
    } else if (emailControl?.hasError('email')) {
      this.errorMessage.set('El correo no es válido.');
    } else {
      this.errorMessage.set('');
    }
  }

  togglePasswordVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  openModal(icon: ModalIcon, title: string, text: string, buttonText: string) {
    this.dialog.open(ModalComponent, {
      width: '450px',
      data: { title, text, buttonText, icon } // Enviar datos al modal
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.spinner.set(true);
      const { email, password } = this.form.getRawValue();
      this.authService
        .register(email, password)
        .then(() => {
          this.spinner.set(false);
          this.openModal(ModalIcon.Success, "Registro con éxito", "ya puedes iniciar sesión", "Aceptar");
          this.router.navigate(['/signin']); // Cambia según tu ruta
        })
        .catch((error) => {
          this.openModal(ModalIcon.Error, "Error", "Credenciales invalidas", "Aceptar");
          //console.error('Error de autenticación:', error);
        })
        .finally(() => {
          this.spinner.set(false);  // Siempre desactiva el spinner
        });
    } else {
      this.openModal(ModalIcon.Error, "Ha ocurrido un error", "Formulario invalido", "Aceptar");
      //console.error('Formulario inválido');
    }
  }

  session(){
    this.router.navigate(['/signin']);
  }

}
