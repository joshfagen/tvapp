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

  // endregion

  constructor(args?) {
      this.id = args.id;
      this.title = args.name;
      this.premiered = args.premiered;
      this.status = args.status;
      this.summary = args.summary;
      this.image = (args.image) ? args.image.medium : null;
      this.rating = (args.rating) ? args.rating.average : null;
      this.network = args.network.name;
  }


}
