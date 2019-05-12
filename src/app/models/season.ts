// Class for Seasons...this.startDate has to be specifically set to null or else the "Upcoming" ng-template won't work in the shows-page component.
export class Season {
  id: number;
  seasonNumber: number;
  image: string;
  startDate: any;
  endDate: any;

  constructor(args?) {
    this.id = args.id;
    this.seasonNumber = args.number;
    this.image = (args.image) ? args.image.medium : null;
    if(this.image) {
      this.image = 'https' + this.image.substring(4);
    }
    if (!args.premiereDate) {
      this.startDate = null;
    } else {
      this.startDate = new Date(args.premiereDate);
    }
    this.endDate = new Date(args.endDate);

  }

}
