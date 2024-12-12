import { Component } from '@angular/core';
import { CardCatalogComponent } from "../../../shared/components/card-catalog/card-catalog.component";

@Component({
  selector: 'app-catalog',
  imports: [CardCatalogComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

}
