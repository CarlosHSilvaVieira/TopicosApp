import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesServiceProvider {

  movies = [
    { id: 1, name: 'Filme 01' },
    { id: 2, name: 'Filme 02' },
    { id: 3, name: 'Filme 03' },
    { id: 4, name: 'Filme 04' },
  ]

  lastId: number = 4

  constructor(public http: HttpClient) {
    console.log('Hello MoviesServiceProvider Provider');
  }

  getAllMovies() {
    return this.movies
  }

  addMovie() {
  }

  getMovieById(id: number) {
    let movie = null
    this.movies.forEach(element => {
      
      if (element.id === id) {
        movie = element
        return false
      }
    })
  
    return movie
  }

}
