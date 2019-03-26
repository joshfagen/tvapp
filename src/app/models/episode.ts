export class Episode {
  // region Attributes
  name: string;


  // endregion
  constructor(args?) {
    if(args) {
      this.name = args.name;
      this.image = args.image;
      this.website = args.website;
      this.phone = args.phone;
      this.rating = args.rating;
      this.avgMealPrice = args.avgMealPrice;
      this.address = args.location;
      this.reviews = args.reviews;
    }
    this.loggerService.log('restaurant');
  }


}
