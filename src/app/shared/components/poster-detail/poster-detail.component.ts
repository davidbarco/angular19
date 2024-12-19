import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poster-detail',
  imports: [CommonModule],
  templateUrl: './poster-detail.component.html',
  styleUrl: './poster-detail.component.css'
})
export class PosterDetailComponent {
  @Input() imageBack: string | undefined = '';
  @Input() image!: string

}
