import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/components/title/title.component";
import { PosterDetailComponent } from "../../../shared/components/poster-detail/poster-detail.component";

@Component({
  selector: 'app-catalog-detail',
  imports: [TitleComponent, PosterDetailComponent],
  templateUrl: './catalog-detail.component.html',
  styleUrl: './catalog-detail.component.css'
})
export class CatalogDetailComponent {

}
