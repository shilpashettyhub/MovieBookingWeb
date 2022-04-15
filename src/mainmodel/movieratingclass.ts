import { Userratingclass } from "./userratingclass";

export class Movieratingclass {
    movieId!: string;
    movieName!: string;
    movieCast!: string;
    movieCrew!: string;
    movieDescription!: string;
    movieOverallRating!: number;
    userRatings!: Userratingclass[];
    constructor(){}
}
