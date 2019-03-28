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
  shows: Show[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private showServ: ShowService) {
   this.query = this.route.snapshot.paramMap.get('query');
   this.showServ.getShows(this.query).subscribe(
     result => {
       this.shows = [];
       result.map((obj) => {
         this.shows.push(new Show(obj.show));
       });
     }
   );

  }

  ngOnInit() {
  }


}
