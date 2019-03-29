import {Component, Input, OnInit} from '@angular/core';
import {Season} from '../../models/season';
import {Show} from '../../models/show';
import {Episode} from '../../models/episode';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowService} from '../../models/show.service';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss']
})
export class ShowsPageComponent implements OnInit {
  id: string;
  seasons: Season[];
  @Input() showId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private showServ: ShowService) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.showServ.getSeasons(this.id).subscribe(result => {
        this.seasons = [];
        result.map((obj) => {
          this.seasons.push(new Season(obj));
        });
      }
    );
  }

  ngOnInit() {
  }

}
