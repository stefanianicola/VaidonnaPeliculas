import { MoviesService } from './services/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public movies = []

  constructor(private movieService : MoviesService){
    this.movieService.getCartelera().subscribe( (movies)=>
      this.movies = movies
    )
  }
}
