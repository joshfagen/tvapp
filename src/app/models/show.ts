import { Episode } from './episode';

export class Show {
  // region Attributes
  id: number;
  title: string;
  premiered: string;
  status: string;
  summary: string;
  lastEp: Episode;
  nextEp: Episode;
  image: string;
  rating: number;

  // endregion

  constructor(args?) {
      this.id = args.id;
      this.title = args.name;
      this.premiered = args.premiered;
      this.status = args.status;
      this.summary = args.summary;
      this.lastEp = args.previousepisode;
      this.nextEp = args.nextepisode;
      this.image = (args.image) ? args.image.medium : null;
      this.rating = (args.rating) ? args.rating.average : null;

  }


}
