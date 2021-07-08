package com.financeactive.pops.Entities;

import javax.persistence.*;

@Entity
@Table(name = "manager")
public class Manager {

    @Id
    @Column(name = "name")
    private String name;

    public Manager(String name) {
        this.name = name;
    }

    public Manager(){};

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

}
