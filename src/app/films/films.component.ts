import {Component, OnInit} from '@angular/core';
import {FilmService} from '../services/film.service';
import {Film} from '../Model/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Array<Film> = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(
      response => {
        this.films = response;
        console.log(this.films);
      });
  }
  // tslint:disable-next-line:typedef
  getFilm(id: string) {
    this.filmService.getFilm(id)
      .subscribe(Film.call);
  }
}
