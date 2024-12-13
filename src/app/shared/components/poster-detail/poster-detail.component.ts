import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poster-detail',
  imports: [],
  templateUrl: './poster-detail.component.html',
  styleUrl: './poster-detail.component.css'
})
export class PosterDetailComponent {
  @Input() image!: string

}
