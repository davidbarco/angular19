import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CardCatalogComponent } from "../../../shared/components/card-catalog/card-catalog.component";
import { TitleComponent } from "../../../shared/components/title/title.component";
import { CatalogService } from './services/catalog.service';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SpinnerComponent } from "../../../shared/components/spinner/spinner.component";

@Component({
  selector: 'app-catalog',
  imports: [CardCatalogComponent, TitleComponent, SpinnerComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  movies = signal<any[]>([]);
  spinner = signal(false);

  private movieService = inject(CatalogService)
  private _destroyRef: DestroyRef = inject(DestroyRef)

  ngOnInit(): void {
    this.loadNowPlayingMovies();
  }

  private loadNowPlayingMovies() {
    this.spinner.set(true);
    this.movieService.getNowPlaying().pipe(
      finalize(() => this.spinner.set(false)),
      takeUntilDestroyed(this._destroyRef))
      .subscribe({
      next: (response) => {
        this.movies.set(response.results); // Asume que la API devuelve un array en `results`.
        console.log('Movies:', this.movies());
      },
      error: (error) => {
        console.error('Error loading movies:', error);
      },
    });
  }

}
