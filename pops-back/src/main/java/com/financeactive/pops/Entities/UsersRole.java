package com.financeactive.pops.Entities;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "role")
public class UsersRole {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column(name = "role_type")
    private String type;

    @Column(name = "claims")
    private String claims;

//    @Column(name = "claims")
//    @ElementCollection(fetch = FetchType.LAZY)
//    private Set<String> claims = new HashSet<String>() {{
//        add("CREATE");
//        add("READ");
//        add("UPDATE");
//        add("DELETE");
//    }};

    public UsersRole(int id,String type,String claims /*Set<String> claimss,*/) {
        this.id = id;
        this.type = type;
        this.claims = claims;
    }

    public UsersRole(){};

    public String getType() { return type; }

    public void setType(String type) { this.type = type; }

    public String getClaims() { return claims; }

    public void setClaims(String claims) { this.claims = claims; }

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

}
