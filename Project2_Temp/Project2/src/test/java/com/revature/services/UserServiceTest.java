package com.revature.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.models.UserClass;
import com.revature.repos.UserRepo;

@SpringBootTest
class UserServiceTest {

	@Autowired
	private UserRepo userrepo;
	

	@Test
	void testFindByUsername() {

		UserClass olist = userrepo.findByUsername("Sample");
		
		System.err.println(olist);

		
	

	}

	@Test
	void testFindAll() {
		List<UserClass> olist = userrepo.findAll();
		System.out.println(olist);

	}

	@Test
	void testFindById() {
		Optional<UserClass> userOpt = userrepo.findById(1);

		UserClass userID = userOpt.get();

		assertEquals(1, userID.getUserId());
	}

	@Test
	void testAddOrUpdateUser() {
		
//		UserClass user= userrepo.save( new UserClass("user1","mypassword"));
//		assertThat(user).hasFieldOrPropertyWithValue("username", "user1");
	
	}

	@Test
	void testDeleteUser() {
		UserClass userOpt = userrepo.findById(1).get();
		UserClass user = userOpt;
		//userrepo.delete(user);
	}

}
