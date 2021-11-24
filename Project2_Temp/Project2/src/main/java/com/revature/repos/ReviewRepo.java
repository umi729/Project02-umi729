package com.revature.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.revature.models.Movie;
import com.revature.models.Review;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Integer>{
    List<Review> findByMovie(Movie movie);
}
