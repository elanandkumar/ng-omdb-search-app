import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class MovieService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getMovies(searchCriteria) {
        if(searchCriteria && (searchCriteria.title || searchCriteria.year)){
            const apiURL = `https://www.omdbapi.com/?apikey=4dd3fc90&s=${searchCriteria.title}&y=${searchCriteria.year}`;
            return this.http.get(apiURL);
        } else {
            throw new Error('Nothing to search!');
        }
    }
}