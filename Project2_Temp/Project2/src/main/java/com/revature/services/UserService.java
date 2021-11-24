package com.revature.services;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
//<<<<<<< Updated upstream
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
//=======
//>>>>>>> Stashed changes
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.revature.models.UserClass;
import com.revature.repos.UserRepo;

@Service
@Component
public class UserService implements UserDetailsService {

	private UserRepo userrepo;
	@Autowired
	private PasswordEncoder bc;

	public UserService() {
		super();
	}


	@Autowired

	public UserService(UserRepo userrepo) {

	

		super();
		this.userrepo = userrepo;

	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		UserClass user = userrepo.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("Username not found");
		}

		return new UserPrincipal(user);
	}

////need to test this login method
//	public UserClass login(String username, String password) {
//		return  userrepo.verifyLoginInfo(username, ae.encrypt(password));
//	}

	@Modifying
	@Transactional
	public boolean forgetPasword(String username, String displayname) {

		// need implementation
		return false;
	}

	public UserClass findByUsername(String username) {

		UserClass olist = userrepo.findByUsername(username);

		return olist;

	}

	public List<UserClass> findAll() {
		return userrepo.findAll();
	}

	public UserClass findById(int ID) {
		Optional<UserClass> userOpt = userrepo.findById(ID);
		UserClass userID = userOpt.get();
		return userID;

	}

	
	@Autowired
	public void hello() {
		System.out.println("hi");
	}
	
	


	@Modifying
	@Transactional
	// Use Save For Save And Update
	public UserClass addUser(UserClass user) {
		user.setPassword(bc.encode(user.getPassword()));
		return userrepo.save(user);
	}

	@Transactional
	public void deleteUser(int ID) throws Exception {
		UserClass user = findById(ID);
		throw new Exception();
		// userrepo.delete(user);
	}

	@Modifying
	@Transactional
	public UserClass updateUser(UserClass usr) {
		return userrepo.save(usr);
	}

	@Modifying
	@Transactional
	public UserClass updatePass(int id, UserClass usr) {
		UserClass dep= userrepo.getById(id);
		
		if(Objects.nonNull(usr.getUsername())&& !"".equalsIgnoreCase(usr.getUsername())) {
			dep.setUsername(usr.getUsername());
		}
		if(Objects.nonNull(usr.getPassword())&& !"".equalsIgnoreCase(usr.getPassword())) {
			dep.setPassword(bc.encode(usr.getPassword()));
		}
		
		return userrepo.save(dep);
	}

}
