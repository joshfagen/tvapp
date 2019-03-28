export class Episode {
  // region Attributes
  season: number;
  number: number;
  title: string;
  aired: Date;
  // endregion
  constructor(args?) {
      this.season = args.season;
      this.number = args.season * 100 + args.epNumber;
      this.title = args.name;
      this.aired = args.airdate;

  }


}
