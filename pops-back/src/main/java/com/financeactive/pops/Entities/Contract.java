package com.financeactive.pops.Entities;

import javax.persistence.*;

@Entity
@Table(name = "contract")
public class Contract {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column(unique = true, name = "libelle")
    private String libelle;

    public Contract(int id,String libelle) {
        this.id = id;
        this.libelle = libelle;
    }

    public Contract(){};

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getLibelle() { return libelle; }

    public void setLibelle(String libelle) { this.libelle = libelle; }
}
