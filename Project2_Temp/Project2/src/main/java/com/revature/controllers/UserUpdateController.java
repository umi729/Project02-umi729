package com.revature.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.UserClass;
import com.revature.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/updateuser")

public class UserUpdateController {
	
	private UserService userservice;
	
	@Autowired
	public UserUpdateController(UserService userservice) {
		super ();
		this.userservice = userservice;
	}
	
	@DeleteMapping("/deluser/{id}")
	public ResponseEntity<?> deleteById(@PathVariable ("id") int id) {
		try {
			userservice.deleteUser(id);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} catch (Exception e) {
			e.printStackTrace();
			 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	
	@PutMapping("/update")
	public UserClass updateUser( @RequestBody UserClass usr) {
		return userservice.updateUser(usr);
	}
	
	
	
	@GetMapping("/alluser")
	public ResponseEntity<List<UserClass>> fetchUser(){
		List<UserClass> list= userservice.findAll();
		if(list.size()<=0) {
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(list));
	}
}
