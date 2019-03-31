import {Component, Input, OnInit} from '@angular/core';
import {Episode} from '../../models/episode';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowService} from '../../models/show.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  @Input() id: string;
  episodes: Episode[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private showServ: ShowService) {
  }

  ngOnInit() {
    // Initialize an observable. Then, using the id of the season, get information on each episode. That info is put into an array which is then rendered in the HTML.
    this.getEpisodes();
  }

  getEpisodes() {
    this.showServ.getEpisodes(this.id).subscribe(result => {
        this.episodes = [];
        result.map((obj) => {
          this.episodes.push(new Episode(obj));
        });
      }
    );
  }

}
