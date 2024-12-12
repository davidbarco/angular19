import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private apiUrl = `${environment.apiBaseUrlMovie}`;
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: environment.apiTokenMovie,
    }),
  };

  constructor(private http: HttpClient) { }

  // Método para obtener películas en cartelera
  getNowPlaying(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${environment.endpoints.movie}/${environment.endpoints.now_playing}`, this.httpOptions);
  }

}
