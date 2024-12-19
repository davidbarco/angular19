import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetailModel } from '../../../../shared/interfaces/detail.movie.model';

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
}
