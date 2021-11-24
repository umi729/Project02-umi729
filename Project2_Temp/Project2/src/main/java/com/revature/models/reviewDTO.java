package com.revature.models;

public class reviewDTO {
    public String username;
    public Movie movie;
    public int starRating;
    public String reviewContent;

    public reviewDTO(String username, Movie movie, int starRating, String reviewContent){
        this.username = username;
        this.movie = movie;
        this.starRating = starRating;
        this.reviewContent = reviewContent;
    }

    

}
