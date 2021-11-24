package com.revature.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import com.revature.models.Movie;
import com.revature.repos.MovieRepo;

@Service
public class MovieService {
	
	private MovieRepo movierepo;

	@Autowired
	public MovieService(MovieRepo movierepo) {

		super();
		this.movierepo = movierepo;

	}

	public List<Movie> findByMoviename(String movieTitle) {

		Optional<List<Movie>> olist = movierepo.findByTitle(movieTitle);

		return (olist.isPresent()) ? olist.get() : new ArrayList<Movie>();

	}

	public List<Movie> findAll() { return movierepo.findAll(); }

	public Movie findById(int ID) {
		Optional<Movie> movieOpt = movierepo.findById(ID);
		Movie movieID = movieOpt.get();
		return movieID;

	}
	
	public Optional<Movie> findByimdbId(String imdbId) {
		return movierepo.findByimdbId(imdbId);
	}
	
	public boolean singleAdd(Movie movie) {
		if (this.findByimdbId(movie.getImdbId()) != null) {
			this.addOrUpdateMovie(movie);
			return true;
		}
		return false;
	}

	@Modifying
	@Transactional
	// VV Use Save For Save And Update
	public void addOrUpdateMovie(Movie movie) { movierepo.save(movie); }

	@Transactional
	public void deleteMovie(int ID) {
		Movie movie = findById(ID);
		movierepo.delete(movie);
	}

}
