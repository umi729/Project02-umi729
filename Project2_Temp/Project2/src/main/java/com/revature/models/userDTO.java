package com.revature.models;

public class userDTO {
	public int userId;
	public String username;
	public Movie movie;
	
	public userDTO(int userId, String username, Movie movie) {
		super();
		this.userId = userId;
		this.username = username;
		this.movie = movie;
	}
	
	
}
