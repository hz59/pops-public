package com.financeactive.pops.auth0;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collection;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Auth0User {

    @JsonProperty("email")
    private final String email;

    @JsonProperty("user_id")
    private final String userId;

    @JsonProperty("identities")
    private final Collection<Identity> identities;

    @JsonCreator
    public Auth0User(@JsonProperty("email") String email,
                     @JsonProperty("user_id") String userId,
                     @JsonProperty("identities") Collection<Identity> identities) {
        this.email = email;
        this.userId = userId;
        this.identities = identities;
    }

    public String getEmail() {
        return email;
    }

    public String getUserId() {
        return userId;
    }

    public Collection<Identity> getIdentities() {
        return identities;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Identity {

        @JsonProperty("connection")
        private final String connection;

        @JsonCreator
        public Identity(@JsonProperty("connection") String connection) {
            this.connection = connection;
        }

        public String getConnection() {
            return connection;
        }
    }
}

