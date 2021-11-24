export class Movie {

  public imdbId : string = "";
  public title : String;  // << Title On ?t= Api Query
  public release : String; // << Released On ?t= API Query 
  public synopsis : String; // << Plot On ?t= api Query
  public genre : String; // << Genre On ?t= API Query
  public director : String; // << Director On ?t= API Query

  constructor (imdbId : string, title : String, release : String, synopsis : String,
    genre : String, director : String) {

    this.imdbId = imdbId;
    this.title = title;
    this.release = release;
    this.synopsis = synopsis;
    this.genre = genre;
    this.director = director;

  }

}
