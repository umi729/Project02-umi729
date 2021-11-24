package com.revature.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * This class includes the following logic:
 * If a user exists and password is correct, then login must be successful
 * otherwise login should fail
 */

public class MyAuthProvider implements AuthenticationProvider {
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = String.valueOf(authentication.getCredentials());

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        // In real case scenarios, userDetailsService should throw an error when user is not found
        // therefore there is no need for null check
        if (userDetails != null){
        	System.out.println(password);
        	System.out.println(userDetails.getPassword());
        	System.out.println(userDetails.getAuthorities());
        	
        	
            if (passwordEncoder.matches(password, userDetails.getPassword())){
               UsernamePasswordAuthenticationToken authenticationToken =
                       new UsernamePasswordAuthenticationToken(username, password, userDetails.getAuthorities());
                return authenticationToken;
            }
        }
        throw new BadCredentialsException("Error!!");
    }

    /**
     * Because I am going to use HttpBasicAuthentication
     * and HttpBasicAuthentication uses UsernamePasswordAuthenticationToken
     * @param authenticationType
     * @return
     */
    @Override
    public boolean supports(Class<?> authenticationType) {
        return UsernamePasswordAuthenticationToken.class.equals(authenticationType);
    }
}