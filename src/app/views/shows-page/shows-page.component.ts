import {Component, Input, OnInit} from '@angular/core';
import {Season} from '../../models/season';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowService} from '../../models/show.service';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss']
})
export class ShowsPageComponent implements OnInit {
  // Create two properties, first is an id determined by which "More Info" button is clicked. Second is a an array of seasons which will be populated and rendered.
  id: string;
  seasons: Season[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private showServ: ShowService) {
    // Establish this.id via paramMap.get() of route.snapshot
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    // call getSeasons()
    this.getSeasons();
  }
  getSeasons() {
    // Call getSeasons() method of service and pass it this.id. Receive results and push to seasons array.
    this.showServ.getSeasons(this.id).subscribe(result => {
        this.seasons = [];
        result.map((obj) => {
          this.seasons.push(new Season(obj));
        });
      }
    );
  }
}
