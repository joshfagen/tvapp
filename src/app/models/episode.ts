export class Episode {
  // region Attributes
  epNumber: number;
  title: string;
  aired: string;
  summary: string;
  // endregion
  constructor(args?) {
      this.epNumber = args.number;
      this.title = args.name;
      this.aired = args.airdate;
      this.summary = args.summary;
  }


}
