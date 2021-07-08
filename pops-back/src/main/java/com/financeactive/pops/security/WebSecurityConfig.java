package com.financeactive.pops.security;

import com.auth0.spring.security.api.JwtWebSecurityConfigurer;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Map;

import static com.financeactive.pops.SecurityConstants.SIGN_UP_URL;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Value(value = "${https://pops.financeactive-dev.com}")
    private String apiAudience;
    @Value(value = "${https://financeactive-dev.eu.auth0.com}")
    private String issuer;
    @Value(value = "openid profile")
    private String scope;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        JwtWebSecurityConfigurer
                .forRS256(apiAudience, issuer)
                .configure(http)
                .cors().and().csrf().disable().authorizeRequests()
                .anyRequest().permitAll();
    }



//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("/").permitAll()
//                .antMatchers("/users").authenticated()
////                .antMatchers("/users/list").authenticated();
//         .antMatchers("/users").hasAnyRole("admin");
//
//        JwtWebSecurityConfigurer
//                .forRS256(apiAudience, issuer)
//                .configure(http)
//                .authorizeRequests()
//                .antMatchers(HttpMethod.GET, "/login").permitAll()
////                .antMatchers(HttpMethod.GET, "/users").authenticated()
//                .antMatchers(HttpMethod.GET, "/users/list").hasAnyRole("admin"); // CREER LE SCOPE ..? (role admin,role user,role manager,role RH)
//                                                                                    // create:user -> pour le role RH (l'api create a user)
//    }

}


