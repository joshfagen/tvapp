import {Component, Input, OnInit} from '@angular/core';
import {Episode} from '../../models/episode';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowService} from '../../models/show.service';
import {Season} from '../../models/season';

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
    this.showServ.getEpisodes(this.id).subscribe(result => {
        this.episodes = [];
        result.map((obj) => {
          this.episodes.push(new Episode(obj));
        });
      }
    );
  }

}
