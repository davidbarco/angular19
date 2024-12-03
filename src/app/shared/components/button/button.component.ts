import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() color: string = 'primary'; // Color por defecto
  @Input() name: string = 'Button';   // Nombre por defecto

}
