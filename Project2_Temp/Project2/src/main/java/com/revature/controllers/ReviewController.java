package com.revature.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Movie;
import com.revature.models.Review;
import com.revature.models.UserClass;
import com.revature.models.reviewDTO;
import com.revature.services.MovieService;
import com.revature.services.ReviewService;
import com.revature.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/review")
public class ReviewController {
	

	private ReviewService reviewservice;
	private MovieService movieservice;
	private UserService userservice;
	
	@Autowired
	public ReviewController(ReviewService reviewservice, MovieService movieservice, UserService userservice) {
		
		super ();
		this.reviewservice = reviewservice;
		this.movieservice = movieservice;
		this.userservice = userservice;
		
	}

	@GetMapping("/reviewsByMovie/{movieid}")
	public ResponseEntity<List<Review>> fetchReviewsByMovie(@PathVariable("movieid") String movieId){
		
		System.err.println("Getting Reviews By MovieID For Printout On Review String");
		
		try {
			Movie movie = movieservice.findByimdbId(movieId).get();
			List<Review> list = reviewservice.findByMovie(movie);
		
			if(list.isEmpty()){
				return ResponseEntity.noContent().build();
			}
			return ResponseEntity.ok(list);
		} catch (NoSuchElementException e){
			e.printStackTrace();
		}
		return ResponseEntity.noContent().build();
	}

	@PostMapping("/addReview")

	
	public ResponseEntity<List<Review>> addReview(@RequestBody reviewDTO review){

		System.err.println("Adding A Review");
		
//		UserClass user = userservice.findByUsername(review.username);
//		Review fullReview = new Review(user, review.movie, review.starRating, review.review);
//		movieservice.addOrUpdateMovie(fullReview.getMovie());
		
		//movieservice.addOrUpdateMovie(review);
		
		reviewservice.addOrUpdateReview(review);

		return ResponseEntity.status(HttpStatus.OK).body(reviewservice.findAll());
	}
	@GetMapping("/getreview")
	public ResponseEntity<List<Review>> getReview(){
		List<Review> list = reviewservice.findAll();
		return ResponseEntity.status(HttpStatus.OK).body(list);
	}

	/* Note For Writing Paths:
	 * @GetMapping
	 * @PostMapping : Addition
	 * @PutMapping : Update
	 * @DeleteMapping
	 * 
	 * All Of These Annotations Can Take A Path As A Parameter Which Will
	 *  Be Useful So That We All Can Specify A Unique Path Based Upon The
	 *  Component We Will Be Using
	 *  
	 *  Example : @GetMapping("/login/{username}")
	 *  	public User getByUsername(@PathVariable("username") String username) {
	 *  
	 *  	return userservice.someDeclaredServiceFunction(username);
	 *  
	 *  }
	 * 
	 */

}
