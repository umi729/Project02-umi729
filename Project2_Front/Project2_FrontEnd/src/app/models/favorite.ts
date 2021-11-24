import { Movie } from './movie';

export class Favorite {

    public username : string;
    public userId : number;
    public movie : Movie;

    constructor (username : string, userId: number, movie : Movie) {

        this.username = username;
        this.userId = userId;
        this.movie = movie;

    }
}
