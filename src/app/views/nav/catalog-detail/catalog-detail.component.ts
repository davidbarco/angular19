import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/components/title/title.component";
import { PosterDetailComponent } from "../../../shared/components/poster-detail/poster-detail.component";
import { ActivatedRoute } from '@angular/router';
import { CatalogDetailService } from './services/catalog-detail.service';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SpinnerComponent } from "../../../shared/components/spinner/spinner.component";
import { MovieDetailModel } from '../../../shared/interfaces/detail.movie.model';
import { VideoResponse } from '../../../shared/interfaces/videosDetail.movie';
import { IframeVideoDetailComponent } from "../../../shared/components/iframe-video-detail/iframe-video-detail.component";

@Component({
  selector: 'app-catalog-detail',
  imports: [TitleComponent, PosterDetailComponent, SpinnerComponent, IframeVideoDetailComponent],
  templateUrl: './catalog-detail.component.html',
  styleUrl: './catalog-detail.component.css'
})
export class CatalogDetailComponent implements OnInit {
  movie = signal<MovieDetailModel | null>(null);
  movieVideos = signal<VideoResponse | null>(null);
  spinner = signal(false);

  private route = inject(ActivatedRoute);
  private catalogDetailService = inject(CatalogDetailService);
  private _destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadMovieDetails(id);  // Realizar la consulta con el ID
      this.loadVideosMovieDetail(id);
    }
  }

  private loadMovieDetails(id: string): void {
    this.spinner.set(true);
    this.catalogDetailService.getMovieDetails(id).pipe(
            finalize(() => this.spinner.set(false)),
            takeUntilDestroyed(this._destroyRef)
          ).subscribe({
      next: (response) => {
        this.movie.set(response);

      },
      error: (error) => {
        console.error('Error fetching movie details:', error);
      },
    });
  }

  private loadVideosMovieDetail(id: string): void {
    this.spinner.set(true);
    this.catalogDetailService.getVideosMovieDetails(id).pipe(
            finalize(() => this.spinner.set(false)),
            takeUntilDestroyed(this._destroyRef)
          ).subscribe({
      next: (response) => {
        //console.log(response);
        this.movieVideos.set(response);
      },
      error: (error) => {
        console.error('Error fetching movie videos details:', error);
      },
    });
  }

}
