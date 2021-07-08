package com.financeactive.pops;

import com.auth0.Tokens;
import com.financeactive.pops.Entities.User;
import com.financeactive.pops.auth0.Auth0User;
//import sun.plugin.util.UserProfile;


import java.util.Collection;

public interface Auth0Client {

    Tokens getTokens(String authorizationCode, String redirectUri);

    Tokens login(String email, String password);

    boolean requestChangePassword(String email);

    Tokens refreshTokens(Tokens tokens);

//    UserProfile getUserProfile(Tokens tokens);

    boolean updateUser(User user, String email, String fullName, String locale);

    boolean createUser(User user);

    Collection<Auth0User> findAllUsers();





    }

