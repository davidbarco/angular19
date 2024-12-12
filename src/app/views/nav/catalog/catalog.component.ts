import { Component } from '@angular/core';
import { CardCatalogComponent } from "../../../shared/components/card-catalog/card-catalog.component";
import { TitleComponent } from "../../../shared/components/title/title.component";

@Component({
  selector: 'app-catalog',
  imports: [CardCatalogComponent, TitleComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

}
