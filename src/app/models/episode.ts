export class Episode {
  // region Attributes
  epNumber: number;
  title: string;
  aired: Date;
  summary: string;
  image: string;
  // endregion
  constructor(args?) {
      this.epNumber = args.number;
      this.title = args.name;
      this.aired = args.airdate;
      this.summary = args.summary;
      this.image = args.image.medium;
  }


}
