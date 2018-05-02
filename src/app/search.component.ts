import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-form',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public movies = [];
  public errorMessage='';
  public searchItems = [];
  movieSearchForm: FormGroup;

  constructor(private _movieService: MovieService, private router: Router) {
    this.searchItems = JSON.parse(window.localStorage.getItem('recentSearches'));
    if(!this.searchItems){
      window.localStorage.setItem('recentSearches', JSON.stringify([]));
    }
  }
  getMovies(searchCriteria, isRecent) {
    if(searchCriteria.title || searchCriteria.year){
      this.router.navigate(['/search-results', searchCriteria]);
    } else {
      this.errorMessage = 'Please enter search term!';
    }
  }

  clearFields() {
    this.movieSearchForm.reset();
    this.errorMessage = '';
  }

  ngOnInit() {
    this.movieSearchForm = new FormGroup({
      title: new FormControl(),
      year: new FormControl()
    });
  }
}
