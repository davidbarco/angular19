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

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    LogoComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    ButtonComponent,
    SpinnerComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent {
  spinner: boolean = false;
  errorMessage = signal('');
  hide = signal(true);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router
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

  onSubmit() {
    if (this.form.valid) {
      this.spinner = true;
      console.log('Datos del formulario:', this.form.getRawValue());
      this.router.navigateByUrl('/app');
    } else {
      this.spinner = false
      console.error('Formulario inválido');
    }
  }
}
