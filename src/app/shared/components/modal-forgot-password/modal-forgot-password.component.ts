import { DialogRef } from "@angular/cdk/dialog";
import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ButtonComponent } from "../button/button.component";
import { AuthService } from "../../services/auth.service";
import { ModalIcon } from "../../enum/modal.enum";
import { ModalComponent } from "../modal/modal.component";
import { MatDialog } from "@angular/material/dialog";
import { SpinnerComponent } from "../spinner/spinner.component";

interface OutputData {
  rta: boolean;
}

@Component({
  selector: "app-modal-forgot-password",
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    ButtonComponent,
    SpinnerComponent
],
  templateUrl: "./modal-forgot-password.component.html",
  styleUrl: "./modal-forgot-password.component.css",
})
export class ModalForgotPasswordComponent {
  spinner = signal(false);
  errorMessage = signal("");
  hide = signal(true);

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  constructor(
    private dialogRef: DialogRef<OutputData>,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    // Validar email en tiempo real
    this.form
      .get("email")
      ?.statusChanges.pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    const emailControl = this.form.get("email");
    if (emailControl?.hasError("required")) {
      this.errorMessage.set("Debes ingresar un correo.");
    } else if (emailControl?.hasError("email")) {
      this.errorMessage.set("El correo no es válido.");
    } else {
      this.errorMessage.set("");
    }
  }

  close() {
    this.dialogRef.close();
  }

  openModal(icon: ModalIcon, title: string, text: string, buttonText: string) {
    this.dialog.open(ModalComponent, {
      width: "450px",
      data: { title, text, buttonText, icon }, // Enviar datos al modal
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.spinner.set(true);
      const { email } = this.form.getRawValue();
      this.authService
        .resetPassword(email)
        .then(() => {
          this.spinner.set(false);
          this.openModal(
            ModalIcon.Success,
            "Correo enviado",
            "Revisa tu bandeja de correo",
            "Aceptar"
          );
          this.close();
        })
        .catch((error) => {
          console.log(error);
          this.openModal(
            ModalIcon.Error,
            "Error",
            "Credenciales invalidas",
            "Aceptar"
          );
        })
        .finally(() => {
          this.spinner.set(false);
        });
    } else {
      this.openModal(
        ModalIcon.Error,
        "Ha ocurrido un error",
        "Formulario invalido",
        "Aceptar"
      );
    }
  }
}
