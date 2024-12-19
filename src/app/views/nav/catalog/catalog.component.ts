import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CardCatalogComponent } from "../../../shared/components/card-catalog/card-catalog.component";
import { TitleComponent } from "../../../shared/components/title/title.component";
import { CatalogService } from './services/catalog.service';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SpinnerComponent } from "../../../shared/components/spinner/spinner.component";
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { MovieResponseModel } from '../../../shared/interfaces/catalog-movie.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CardCatalogComponent, TitleComponent, SpinnerComponent, PaginationComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  movies = signal<MovieResponseModel | null>(null);
  spinner = signal(false);
  totalPages = signal<number>(0);
  totalResults = signal<number>(0);
  currentPage = signal<number>(1);

  private movieService = inject(CatalogService);
  private _destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.loadNowPlayingMovies(this.currentPage());
  }

  onPageChange(page: number): void {
    this.currentPage.set(page); // Actualiza la página actual
    this.loadNowPlayingMovies(page); // Carga las películas de la nueva página
  }

  private loadNowPlayingMovies(page: number): void {
    this.spinner.set(true);
    this.movieService
      .getNowPlaying(page) // Asegúrate de que el servicio acepte un parámetro `page`
      .pipe(
        finalize(() => this.spinner.set(false)),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe({
        next: (response) => {
          this.totalPages.set(response.total_pages);
          this.totalResults.set(response.total_results);
          this.currentPage.set(response.page);
          this.movies.set(response); // Actualiza la lista de películas
          //console.log('Movies:', this.movies());
        },
        error: (error) => {
          console.error('Error loading movies:', error);
        },
      });
  }
}
