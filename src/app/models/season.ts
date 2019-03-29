
export class Season {
  id: number;
  seasonNumber: number;
  image: string;
  startDate: string;
  endDate: string

  constructor(args?) {
    this.id = args.id;
    this.seasonNumber = args.number;
    this.image = (args.image) ? args.image.medium : null;
    this.startDate = args.premiereDate
    this.endDate = args.endDate;

  }

}
