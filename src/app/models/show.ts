import { Episode } from './episode';

export class Show {
  // region Attributes
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
    if(args) {
      this.title = args.name;
      this.premiered = args.premiered;
      this.status = args.status;
      this.summary = args.summary;
      this.lastEp = args.previousepisode;
      this.nextEp = args.nextepisode;
      this.image = args.image;
      this.rating = args.rating;
    }
    // this.loggerService.log('restaurant');
  }


}
