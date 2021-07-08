package com.financeactive.pops.Entities;

import javax.persistence.*;

@Entity
@Table(name = "role_attribution")
public class RoleAttribution {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @Column(name = "title")
    private String title;

    public RoleAttribution(String title) {
        this.title = title;
    }

    public RoleAttribution() {}

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }
}
