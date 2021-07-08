package com.financeactive.pops.Entities;

import javax.persistence.*;

@Entity
@Table(name = "job_title")
public class JobTitle {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @Column(unique = true, name = "libelle")
    private String libelle;

    public JobTitle(String libelle, int id) {
        this.libelle = libelle;
        this.id = id;
    }

    public JobTitle(){};

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getLibelle() { return libelle; }

    public void setLibelle(String libelle) { this.libelle = libelle; }
}
