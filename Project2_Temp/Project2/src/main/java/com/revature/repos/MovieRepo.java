package com.revature.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Movie;
import com.revature.models.UserClass;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Integer> {

	public Optional<List<Movie>> findByTitle(String movieTitle);
	
	public Optional<Movie> findByimdbId(String imdbId);

	
}
