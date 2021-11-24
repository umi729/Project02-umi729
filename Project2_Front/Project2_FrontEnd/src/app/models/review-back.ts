export class ReviewBack {

  public review: string = "";
  public rid : number = 0;
  public starRating: number = 0;

  Constructor(review : string, rid : number, starRating : number) {

    this.review = review;
    this.rid = rid;
    this.starRating = starRating;

  }
}
