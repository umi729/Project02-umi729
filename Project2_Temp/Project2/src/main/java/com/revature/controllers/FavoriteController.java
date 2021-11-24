package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Favorite;
import com.revature.models.userDTO;
import com.revature.services.FavoriteService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/favorite")
public class FavoriteController {

	private FavoriteService favoriteservice;
	
	@Autowired
	public FavoriteController(FavoriteService favoriteservice) {
		
		super ();
		this.favoriteservice = favoriteservice;
		
	}
	
	@GetMapping
	public List<Favorite> allFavorites() {
		return favoriteservice.findAll();
	}
	
	@GetMapping("/{id}")
	public Favorite oneFavorite(@PathVariable("id") int id) {
		Favorite favorite = favoriteservice.findById(id);
		return favorite;
	}
	
	@GetMapping("/user/{id}")
	public List<Favorite> favoritesByuser(@PathVariable("id") int id) {
		
		//System.err.println("Finding Favorites By User ID");
		
		System.out.println(favoriteservice.findByUser_userId(id));
		return favoriteservice.findByUser_userId(id);
	}
	
	@GetMapping("/movie/{id}")
	public List<Favorite> favoritesBymovie(@PathVariable("id") int id) {
		return favoriteservice.findByMovie_movieId(id);
	}
	
	@PostMapping
	public ResponseEntity<Favorite> addFavorite(@RequestBody userDTO userdto) {
		//System.err.println(userdto.movie);
		
		favoriteservice.addOrUpdateFavorite(userdto);
		return ResponseEntity.status(201).build();
	}
	
//	@PutMapping
//	public ResponseEntity<Favorite> updateFavorite(@RequestBody Favorite fav) {
//		favoriteservice.addOrUpdateFavorite(fav);
//		return ResponseEntity.status(200).build();
//	}
	
//	@PostMapping("/{uid}/{mid]")
//	public ResponseEntity<Favorite> deleteFavorite(@PathVariable("uid") int uid, @PathVariable("mid") String mid) {
//		System.out.println(uid);
//		System.out.println(mid);
////		favoriteservice.deleteFavorite(uid, mid);
//		return ResponseEntity.status(201).build();
//	}
	

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
