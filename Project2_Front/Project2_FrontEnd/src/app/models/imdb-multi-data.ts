export class ImdbMultiData {

  public imdbID : String;
  public Title : String;
  public Type : String;
  public Year : String;
  public Poster : String;

  constructor (imdbID : String, Title : String, Type : String, 
    Year : String, Poster : String) {

    this.imdbID = imdbID;
    this.Title = Title;
    this.Type = Type;
    this.Year = Year;
    this.Poster = Poster;

  }

}
