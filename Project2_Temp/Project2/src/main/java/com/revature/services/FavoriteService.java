package com.revature.services;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import com.revature.models.Favorite;
import com.revature.models.Movie;
import com.revature.models.UserClass;
import com.revature.models.userDTO;
import com.revature.repos.FavoriteRepo;

@Service
public class FavoriteService {
	
	private static Logger log = LoggerFactory.getLogger(FavoriteService.class);
	
	private FavoriteRepo favoriterepo;
	private UserService userService;
	private MovieService movieService;

	@Autowired
	public FavoriteService(FavoriteRepo favoriterepo, UserService userService, MovieService movieService) {

		super();
		this.favoriterepo = favoriterepo;
		this.userService = userService;
		this.movieService = movieService;

	}

	public List<Favorite> findAll() { 
		return favoriterepo.findAll(); 
	}
	
	

	public Favorite findById(int ID) {
		return favoriterepo.findById(ID).get();
	}
	
	public List<Favorite> findByUser_userId(int id) {
		Optional<List<Favorite>> oList = favoriterepo.findByUser_userId(id);
		if (oList.isPresent()) {
			List<Favorite> list = oList.get();
			if (list.size() == 0) {
				throw new IllegalArgumentException("No Favorites!");
			}
			return list;
		}
		return new ArrayList<Favorite>();
	}
	
	public List<Favorite> findByMovie_movieId(int id) {
		Optional<List<Favorite>> oList = favoriterepo.findByMovie_movieId(id);
		if (oList.isPresent()) {
			List<Favorite> list = oList.get();
			if (list.size() == 0) {
				throw new IllegalArgumentException("No Favorites!");
			}
			return list;
		}
		return new ArrayList<Favorite>();
	}
	
//	public Favorite findByUser_userIdAndMovie_movieId(int uid, int mid) {
//		Favorite fav = favoriterepo.find
//	}

	@Modifying
	@Transactional
	// VV Use Save For Save And Update
	public void addOrUpdateFavorite(userDTO userDTO) {
		
		log.info("Starting Favorite Addition Service");
		
		//System.err.println("Starting Add Favorite");
		
		UserClass user = userService.findByUsername(userDTO.username);
		
		//System.err.println(user);
		
		//System.err.println("Starting Find Movie By IMDBID");
		
		Movie movie = null;
		
		try {
		Movie movieQ = movieService.findByimdbId(userDTO.movie.getImdbId()).get();
		movie = movieQ;
		
		log.info("Movie Found Inside Database");
		//System.err.println("Movie Found" + movieQ);
		//System.err.println("Movie Found" + movie);
		}
		catch (NoSuchElementException e) { 
			log.info("Exception Caught : Movie Not Found Inside Database");
			//System.err.println("No Movie Found"); 
			}
		
		//System.err.println("Movie Value : " + movie);
		
		if (movie == null) {
			movieService.addOrUpdateMovie(userDTO.movie);
			
			//System.err.println("Adding Movie");
			log.info("Movie Added To Database Entitled : " + userDTO.movie.getTitle());
		
			// VV Need To Query Again To Obtain The Movie ID
			movie = movieService.findByimdbId(userDTO.movie.getImdbId()).get();
			
		}
		else { log.info("Movie Already Inside Database : Movie Not Added To Database"); }
		
		
		Favorite fav = new Favorite(user, movie);
		
		//System.out.println(fav);
		
		favoriterepo.save(fav); 
		
	}

	@Transactional
	public void deleteFavorite(Favorite favorite) {
		System.out.println(favorite);
		Favorite fav = favoriterepo.findByUser_userIdAndMovie_movieId(favorite.getUser().getUserId(), favorite.getMovie().getMovieId()).get();
		System.out.println(fav);
		favoriterepo.delete(fav);
	}

}
