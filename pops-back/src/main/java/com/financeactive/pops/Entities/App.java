package com.financeactive.pops.Entities;

import javax.persistence.*;

@Entity
@Table(name = "applications")
public class App {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column(unique = true, name = "libelle")
    private String libelle;

    private String info;

    public App(String libelle, String info) {
        this.libelle = libelle;
        this.info = info;
    }

    public App() {};

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getLibelle() { return libelle; }

    public void setLibelle(String libelle) { this.libelle = libelle; }

    public String getInfo() { return info; }

    public void setInfo(String info) { this.info = info; }
}
