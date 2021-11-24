import { OutsideRatings} from './outside-ratings';

export class AllMovieData {

  public Actors: string = "";
  public Awards: string = "";
  public BoxOffice: string = "";
  public Country: string = "";
  public DVD: string = "";
  public Director: string = "";
  public Genre: string = "";
  public Language: string = "";
  public Metascore: string = "";
  public Plot: string = "";
  public Poster: string = "";
  public Production: string = "";
  public Rated: string = "";
  public Ratings: Array<OutsideRatings> = [];
  public Released: string = "";
  public Response: string = "";
  public Runtime: string = "";
  public Title: string = "";
  public Type: string = "";
  public Website: string = "";
  public Writer: string = "";
  public Year: string = "";
  public imdbID: string = "";
  public imdbRating: string = "";
  public imdbVotes: string = "";

  Constructor (Actors : string, Awards : string, BoxOffice : string,
    Country : string, DVD : string, Director : string, Genre : string,
    Language : string, Metascore : string, Plot : string, 
    Poster : string, Production : string, Rated : string,
    Ratings : Array<OutsideRatings>, Released : string,
    Response : string, Runtime : string, Title : string, Type : string,
    Website : string, Writer : string, Year : string, imdbID : string,
    imdbRating : string, imdbVotes : string) {

      this.Actors = Actors;
      this.Awards = Awards;
      this.BoxOffice = BoxOffice;
      this.Country = Country;
      this.DVD = DVD;
      this.Director = Director;
      this.Genre = Genre;
      this.Language = Language;
      this.Metascore = Metascore;
      this.Plot = Plot;
      this.Poster = Poster; 
      this.Production = Production; 
      this.Rated = Rated;
      this.Ratings = Ratings; 
      this.Released = Released; 
      this.Response = Response;
      this.Runtime = Runtime; 
      this.Title = Title; 
      this.Type = Type;
      this.Website = Website; 
      this.Writer = Writer; 
      this.Year = Year;
      this.imdbID = imdbID; 
      this.imdbRating = imdbRating; 
      this.imdbVotes = imdbVotes;

    }

}
