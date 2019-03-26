import { Injectable } from '@angular/core';
import {Show} from './show';
@Injectable({
  providedIn: 'root'
})
export class ShowService {
  shows: Shows[];
  constructor() {
    this.shows = [
      new Show({
        name:
      })
    ]
  }
}
