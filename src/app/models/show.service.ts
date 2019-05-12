//Service page for API calls.

import { Injectable } from '@angular/core';
import {Show} from './show';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  baseUrl = 'https://api.tvmaze.com/';

   constructor(private http: HttpClient) {
  }

  //getShows() used to produce search results. Called in shows.component.ts.
  getShows(show): Observable<any> {
     const url = this.baseUrl + 'search/shows?q=' + show;
     return this.http.get<any[]>(url);
  }

  //getSeasons() used to produce seasons when "More Info" button is called. Called in shows-page.component.ts
  getSeasons(seasonId): Observable<any[]> {
     const url = this.baseUrl + 'shows/' + seasonId + '/seasons';
     return this.http.get<any[]>(url);
  }

  // getEpisodes() is used to render episodes within each season. Called in episodes.component.ts.
  getEpisodes(seasonId): Observable<any> {
     const url = this.baseUrl + 'seasons/' + seasonId + '/episodes';
     return this.http.get<any[]>(url);
  }

  // to get a single episode for prevEp and nextEp the following method is used.
  getEpisode(url): Observable<any> {
     return this.http.get<any[]>(url);
  }
}
