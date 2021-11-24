
package com.revature.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revature.models.UserClass;

@Repository
public interface UserRepo extends JpaRepository<UserClass, Integer> {  
	
	public UserClass findByUsername(String username);
	
//	@Query(value = "SELECT * FROM UserClass s WHERE s.username=:user AND s.password = :pass" , 
//			nativeQuery = true)
//	UserClass verifyLoginInfo(@Param("user") String user, @Param("pass") String pass);
//	
}
