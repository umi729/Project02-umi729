package com.revature.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
public class Review {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int rid;
    
    @JoinColumn(name="userId", referencedColumnName = "userId")
    @ManyToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonBackReference
    private UserClass userclass;
    
    @JoinColumn(name="movieId", referencedColumnName = "movieId")
    @JsonBackReference
    @ManyToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
    private Movie movie;
    
    private byte starRating;
    
    private String review;

    
    //constructors
	public Review(int rid, UserClass userclass, Movie movie, byte starRating, String review) {
		super();
		this.rid = rid;
		this.userclass = userclass;
		this.movie = movie;
		this.starRating = starRating;
		this.review = review;
	}

	public Review(UserClass userclass, Movie movie, byte starRating, String review) {
		super();
		this.userclass = userclass;
		this.movie = movie;
		this.starRating = starRating;
		this.review = review;
	}

	public Review() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((movie == null) ? 0 : movie.hashCode());
		result = prime * result + ((review == null) ? 0 : review.hashCode());
		result = prime * result + rid;
		result = prime * result + starRating;
		result = prime * result + ((userclass == null) ? 0 : userclass.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Review other = (Review) obj;
		if (movie == null) {
			if (other.movie != null)
				return false;
		} else if (!movie.equals(other.movie))
			return false;
		if (review == null) {
			if (other.review != null)
				return false;
		} else if (!review.equals(other.review))
			return false;
		if (rid != other.rid)
			return false;
		if (starRating != other.starRating)
			return false;
		if (userclass == null) {
			if (other.userclass != null)
				return false;
		} else if (!userclass.equals(other.userclass))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Review [rid=" + rid + ", userclass=" + userclass + ", movie=" + movie + ", starRating=" + starRating
				+ ", review=" + review + "]";
	}

	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public UserClass getUserclass() {
		return userclass;
	}

	public void setUserclass(UserClass userclass) {
		this.userclass = userclass;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public byte getStarRating() {
		return starRating;
	}

	public void setStarRating(byte starRating) {
		this.starRating = starRating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

   

}
