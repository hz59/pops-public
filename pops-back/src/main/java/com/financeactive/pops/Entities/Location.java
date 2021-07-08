package com.financeactive.pops.Entities;


import javax.persistence.*;

@Entity
@Table(name="Location")
public class Location {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column(name = "libelle")
    private String libelle;

    public Location(int id,String libelle) {
        this.libelle = libelle;
        this.id = id;
    }

    public Location(){};

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getLibelle() { return libelle; }

    public void setLibelle(String libelle) { this.libelle = libelle; }
}
