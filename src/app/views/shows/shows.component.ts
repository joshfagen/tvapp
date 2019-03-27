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
  query: string;
  shows: any[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private showServ: ShowService) {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('query');
    })
  }

  ngOnInit() {
    this.showServ.getShows(this.query).subscribe(
      (result) => {
        let counter = 9;
        while (counter >= 0) {
         this.shows.push(result.show);
         counter--;
        }
        console.log(result);
        console.log(this.shows);
        return this.shows;
      }
    );
  }


}
