import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogDetailService {

    private apiUrl = `${environment.apiBaseUrlMovie}`;
    private httpOptions = {
      headers: new HttpHeaders({
        Authorization: environment.apiTokenMovie,
      }),
    };

    constructor(private http: HttpClient) { }

    // Método para obtener el detalle de una pelicula
    getMovieDetails(id: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${environment.endpoints.movie}/${id}`, this.httpOptions);
    }
}
