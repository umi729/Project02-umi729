package com.revature;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
	    "com.revature"
})
public class Project2Application {

	//@Autowired
	//private static UserService ur;
	
	public static void main(String[] args) {
		
		
		SpringApplication.run(Project2Application.class, args);
		
		
	}

}
