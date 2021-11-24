package com.revature.services;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.models.Favorite;
import com.revature.repos.FavoriteRepo;

@SpringBootTest
public class FavoriteTest {

	@Autowired
	private FavoriteRepo favrepo;
	
	@Test
	public void findAll() {
		assertThat(favrepo.findAll().size() > 0);
	}
	
	@Test
	public void findByUser() {
		assertThat(favrepo.findByUser_userId(3).get().size() > 0);
	}
	
	@Test
	public void findByUserandMovie() {
		assertThat(favrepo.findByUser_userIdAndMovie_movieId(3, 36) != null);
	}
	
}
