package com.financeactive.pops.Entities;


import javax.persistence.*;

@Entity
@Table(name = "department")
public class Department {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column(unique = true, name = "libelle")
    private String libelle;

    public Department(int id, String libelle) {
        this.libelle = libelle;
        this.id = id;
    }

    public Department(){};

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getLibelle() { return libelle; }

    public void setLibelle(String libelle) { this.libelle = libelle; }

}
