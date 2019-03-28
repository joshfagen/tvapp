import { Injectable } from '@angular/core';
import {Show} from './show';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  baseUrl = 'http://api.tvmaze.com/';
   constructor(private http: HttpClient) {
  }

  getShows(show): Observable<any> {
     const url = this.baseUrl + 'search/shows?q=' + show;
     return this.http.get<any[]>(url);
  }

  getSeasons(seasonId): Observable<any[]> {
     const url = this.baseUrl + 'shows/' + seasonId + '/seasons';
     return this.http.get<any[]>(url);
  }

  getEpisodes(seasonId): Observable<any> {
     const url = this.baseUrl + 'seasons/' + seasonId + '/episodes';
     return this.http.get<any[]>(url);
  }
}
