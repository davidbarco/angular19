import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-catalog',
  imports: [],
  templateUrl: './card-catalog.component.html',
  styleUrl: './card-catalog.component.css'
})
export class CardCatalogComponent {
  @Input() movie: any

  constructor(private router: Router){

  }

  navigateToDetail(id: number): void {
    this.router.navigate([`app/catalog-detail/${id}`]);
  }



}
