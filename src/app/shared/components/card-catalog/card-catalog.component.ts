import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-catalog',
  imports: [],
  templateUrl: './card-catalog.component.html',
  styleUrl: './card-catalog.component.css'
})
export class CardCatalogComponent {
  @Input() movie: any

  

}
