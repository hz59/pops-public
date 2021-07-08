package com.financeactive.pops.Entities;

import javax.persistence.*;

@Entity
@Table(name = "roles_users_relation")
public class UsersRolesRelations {

    @Id
    @Column(name = "id_role")
    private Integer id_role;

    @Column(name = "id_user")
    private int id_user;

    @Column(name = "id_role_attribution")
    private int id_role_attribution;

    @OneToOne
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private User user;

    @OneToOne
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private RoleAttribution role_attribution;


    public UsersRolesRelations(Integer id_role, int id_user, int id_role_attribution) {
        this.id_role = id_role;
        this.id_user = id_user;
        this.id_role_attribution = id_role_attribution;
    }

    public UsersRolesRelations() {}

    public Integer getId_role() { return id_role; }

    public void setId_role(Integer id_role) { this.id_role = id_role; }

    public int getId_user() { return id_user; }

    public void setId_user(int id_user) { this.id_user = id_user; }

    public int getId_role_attribution() { return id_role_attribution; }

    public void setId_role_attribution(int id_role_attribution) { this.id_role_attribution = id_role_attribution; }
}
