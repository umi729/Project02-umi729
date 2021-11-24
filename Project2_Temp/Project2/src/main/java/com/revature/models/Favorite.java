package com.revature.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
public class Favorite {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int fid;
	
	@JoinColumn(name="userId", referencedColumnName = "userId")
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
//	@JsonBackReference
	private UserClass user;
	
	@JoinColumn(name="movieId", referencedColumnName = "movieId")
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
//	@JsonBackReference
	private Movie movie;

	public Favorite(int fid, UserClass user, Movie movie) {
		super();
		this.fid = fid;
		this.user = user;
		this.movie = movie;
	}

	public Favorite(UserClass user, Movie movie) {
		super();
		this.user = user;
		this.movie = movie;
	}

	public Favorite() {
		super();
	}

	@Override
	public String toString() {
		return "Favorite [fid=" + fid + ", user=" + user + ", movie=" + movie + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + fid;
		result = prime * result + ((movie == null) ? 0 : movie.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
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
		Favorite other = (Favorite) obj;
		if (fid != other.fid)
			return false;
		if (movie == null) {
			if (other.movie != null)
				return false;
		} else if (!movie.equals(other.movie))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public UserClass getUser() {
		return user;
	}

	public void setUser(UserClass user) {
		this.user = user;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	
	
}