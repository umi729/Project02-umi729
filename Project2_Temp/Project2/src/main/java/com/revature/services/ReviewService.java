package com.revature.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import com.revature.models.Favorite;
import com.revature.models.Movie;
import com.revature.models.Review;
import com.revature.models.UserClass;
import com.revature.models.reviewDTO;
import com.revature.repos.ReviewRepo;

@Service
public class ReviewService {
	
	private ReviewRepo reviewrepo;
	private UserService userService;
	private MovieService movieService;


	
	@Autowired
	public ReviewService(ReviewRepo reviewrepo, UserService userService, MovieService movieService) {

		super();
		this.reviewrepo = reviewrepo;
		this.userService = userService;
		this.movieService = movieService;


	}

	public List<Review> findAll() { return reviewrepo.findAll(); }

	
	public Review findById(int ID) {
		Optional<Review> reviewOpt = reviewrepo.findById(ID);
		Review reviewID = reviewOpt.get();
		return reviewID;

	}

	@Modifying
	@Transactional
	// VV Use Save For Save And Update
	
	/*
	 * VV Review DTO
	 * 
	 *  public String username;
    public Movie movie;
    public int starRating;
    public String review;
	 * 
	 * 
	 */
	public void addOrUpdateReview(reviewDTO reviewdto) { 
		

		//log.info("Starting Favorite Addition Service");
		
		System.err.println("Starting Add Review");
		
		UserClass user = userService.findByUsername(reviewdto.username);
		
		System.err.println(user);
		
		System.err.println("Starting Find Movie By IMDBID");
		
		Movie movie = null;
		
		try {
		Movie movieQ = movieService.findByimdbId(reviewdto.movie.getImdbId()).get();
		movie = movieQ;
		
		//log.info("Movie Found Inside Database");
		System.err.println("Movie Found" + movieQ);
		System.err.println("Movie Found" + movie);
		}
		catch (NoSuchElementException e) { 
			//log.info("Exception Caught : Movie Not Found Inside Database");
			System.err.println("No Movie Found"); 
			}
		
		System.err.println("Movie Value : " + movie);
		
		if (movie == null) {
			movieService.addOrUpdateMovie(reviewdto.movie);
			
			System.err.println("Adding Movie");
			//log.info("Movie Added To Database Entitled : " + userDTO.movie.getTitle());
		
			// VV Need To Query Again To Obtain The Movie ID
			movie = movieService.findByimdbId(reviewdto.movie.getImdbId()).get();
			
		}
		else { }//log.info("Movie Already Inside Database : Movie Not Added To Database"); }
		
		
		Review reviewToAdd = new Review(user, movie, (byte) reviewdto.starRating, reviewdto.reviewContent);
		
		System.out.println(reviewToAdd);
		
		reviewrepo.save(reviewToAdd); 
		 
	
	}

	@Transactional
	public void deleteReview(int ID) {
		Review review = findById(ID);
		reviewrepo.delete(review);
	}

	public List<Review> findByMovie(Movie movie){
		return reviewrepo.findByMovie(movie);
	}

}
