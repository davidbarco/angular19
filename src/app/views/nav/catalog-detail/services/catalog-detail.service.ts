import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetailModel } from '../../../../shared/interfaces/detail.movie.model';
import { VideoResponse } from '../../../../shared/interfaces/videosDetail.movie';

@Injectable({
  providedIn: 'root'
})
export class CatalogDetailService {

    private apiUrl = `${environment.apiBaseUrlMovie}`;

    constructor(private http: HttpClient) { }

    // Método para obtener el detalle de una pelicula
    getMovieDetails(id: string): Observable<MovieDetailModel> {
      return this.http.get<MovieDetailModel>(`${this.apiUrl}/${environment.endpoints.movie}/${id}`);
    }

    getVideosMovieDetails(id: string): Observable<VideoResponse> {
      return this.http.get<VideoResponse>(`${this.apiUrl}/${environment.endpoints.movie}/${id}/${environment.endpoints.videos}`);
    }
}
