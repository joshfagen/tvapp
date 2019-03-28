
export class Season {
  id: number;
  seasonNumber: number;
  image: string;
  dates: string;

  constructor(args?) {
    this.id = args.id;
    this.seasonNumber = args.number;
    this.image = (args.image) ? args.image.medium : null;
    this.dates = args.startDate + ' to ' + args.endDate;

  }

}
