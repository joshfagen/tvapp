// Class for episodes
export class Episode {
  // region Attributes
  epName: string;
  epNumber: number;
  title: string;
  aired: Date;
  summary: string;
  image: string;
  // endregion
  constructor(args?) {
      this.epName = args.name;
      this.epNumber = args.number;
      this.title = args.name;
      this.aired = new Date(args.airdate);
      this.summary = args.summary;
      this.image = args.image.medium;
  }


}
