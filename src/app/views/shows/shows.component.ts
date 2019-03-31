import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../models/show.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Show} from '../../models/show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})

export class ShowsComponent implements OnInit {
  // create two properties...one for search query that user types in, and a shows array to be returned.
  query: string;
  shows: Show[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private showServ: ShowService) {

    //  query is acquired via the paramMap.get() method of route.snapshot
   this.query = this.route.snapshot.paramMap.get('query');


  }

  ngOnInit() {
    // Call getShows()
    this.getShows();
  }

  getShows() {
  // Create observable on getShows method of service, and pass it the search query. The observable is subscribed to and receives the results, which are then pushed into the shows array.
    this.showServ.getShows(this.query).subscribe(
      result => {
        this.shows = [];
        result.map((obj) => {
          this.shows.push(new Show(obj.show));
        });
      }
    );
  }
}
