import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from '../Model/Film';


@Injectable({providedIn: 'root'})

export class FilmService {
  constructor(private httpClient: HttpClient) {}

  private serverUrl = 'https://swapi.dev/api/films';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.serverUrl);
  }

  getFilm(id: string): Observable<Film>{
    const url = `${this.serverUrl}/${id}`;
    return this.httpClient.get<Film>(url);
  }
}
