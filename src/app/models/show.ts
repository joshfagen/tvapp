// Class for Shows
import { Episode } from './episode';
import { ShowService } from './show.service';

export class Show {
  // region Attributes
  id: number;
  title: string;
  premiered: string;
  status: string;
  summary: string;
  image: string;
  rating: number;
  network: string;
  previousEpUrl: string;
  nextEpUrl: string;
  previousEp: Episode;
  nextEp: Episode;

  // endregion

  constructor(args?) {
      this.id = args.id;
      this.title = args.name;
      this.premiered = args.premiered;
      this.status = args.status;
      this.summary = args.summary;
      this.image = (args.image) ? args.image.medium : null;
      this.rating = (args.rating) ? args.rating.average : null;
      this.network = (args.network) ? args.network.name : null;
      // Need to use ternary operator to avoid errors for shows without previous/next episodes.
      this.previousEpUrl = args._links.previousepisode ? args._links.previousepisode.href : null;
      this.nextEpUrl = args._links.nextepisode ? args._links.nextepisode.href : null;
  }

  // Methods to set previous and next episodes.
setPrevEp(episode: Episode) {
    this.previousEp = episode;
  }

setNextEp(episode: Episode) {
    this.nextEp = episode;
  }

}
