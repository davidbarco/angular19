import {Component, Inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
} from '@angular/material/dialog';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { ModalIcon } from '../../enum/modal.enum';

@Component({
  selector: 'app-modal',
  imports: [
    MatButtonModule,
    MatDialogClose,
    ButtonComponent,
    CommonModule
],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  ModalIcon = ModalIcon;

  constructor(
   @Inject(MAT_DIALOG_DATA)
   public data: { title: string, text: string, buttonText: string, icon: any }
  ) {}
    
  }
