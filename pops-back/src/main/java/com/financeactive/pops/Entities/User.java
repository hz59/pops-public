package com.financeactive.pops.Entities;


import javax.persistence.*;
import java.util.Date;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "user", uniqueConstraints={@UniqueConstraint(columnNames={"id"})})
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column(unique = true, name = "email")
    private String email;

    @Column(name = "role_type")
    private String role_type;

    @Column(name = "is_enabled",columnDefinition= "boolean default true")
    private boolean is_enabled = true;

    private String password;

    private String name;

    private String firstname;

        @Temporal(TemporalType.TIMESTAMP)
    private Date date_start;

    //    @Temporal(TemporalType.TIMESTAMP)
    private Date date_end;

    private String contract;

    private String location;

    private String department;

    private String business_unit;

    private String service;

    private String job_title;

    private boolean got_iphone;

    @Column(name = "manager_name")
    private String manager_name;

//    @Column(name = "app_references")
//    private String app_references;

    // SUPPRIME CE MAPPING
//    @OneToOne
//    @JoinColumn(name = "role_type", insertable = false, updatable = false)
//    private UsersRole role;

    @OneToOne
    @JoinColumn(name = "manager_name", insertable = false, updatable = false)
    private Manager manager;

    public User(int id, String name, String password, boolean is_enabled, Date date_start, Date date_end,
                String firstname, String contract /* Manager manager*/, String department, String location,/* UsersRole role,*/ String service,
                String business_unit, boolean got_iphone, String role_type, String job_title, Manager nom, String manager_name) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.is_enabled = is_enabled;
        this.date_start = date_start;
        this.date_end = date_end;
        this.firstname = firstname;
        this.contract = contract;
//        this.manager = manager;
        this.department = department;
        this.location = location;
//        this.role = role;
        this.business_unit = business_unit;
        this.service = service;
        this.got_iphone = got_iphone;
        this.role_type = role_type;
        this.job_title = job_title;
        this.manager_name = manager_name;
//        this.app_references = app_references;
    }
    public User(){};

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return this.password; }

    public void setPassword(String password) { this.password = password; }

    public boolean getIs_enabled() { return this.is_enabled; }

    public void setIs_enabled(boolean is_enabled) { this.is_enabled = is_enabled; }

    public Date getDate_start() { return date_start; }

    public void setDate_start(Date date_start) { this.date_start = date_start; }

    public Date getDate_end() { return date_end; }

    public void setDate_end(Date date_end) { this.date_end = date_end; }

    public String getFirstname() { return firstname; }

    public void setFirstname(String firstname) { this.firstname = firstname; }

    public String getContract() { return contract; }

    public void setContract(String contract) { this.contract = contract; }

//    public Manager getManager() { return manager; }

//    public void setManager(Manager manager) { this.manager = manager; }

    public String getDepartment() { return department; }

    public void setDepartment(String department) { this.department = department; }

    public String getLocation() { return location; }

    public void setLocation(String location) { this.location = location; }

//    public UsersRole getRole() { return role; }

//    public void setRole(UsersRole role) { this.role = role; }

    public String getBusiness_unit() { return business_unit; }

    public void setBusiness_unit(String business_unit) { this.business_unit = business_unit; }

    public String getService() { return service; }

    public void setService(String service) { this.service = service; }

    public boolean isGot_iphone() { return got_iphone; }

    public void setGot_iphone(boolean got_iphone) { this.got_iphone = got_iphone; }

    public String getRole_type() { return role_type; }

    public void setRole_type(String role_type) { this.role_type = role_type; }

    public String getJob_title() { return job_title; }

    public void setJob_title(String job_title) { this.job_title = job_title; }

    public boolean isIs_enabled() { return is_enabled; }

    public String getManager_name() { return manager_name; }

    public void setManager_name(String manager_name) { this.manager_name = manager_name; }


//    public String getApp_references() { return app_references; }

//    public void setApp_references(String app_references) { this.app_references = app_references; }
}

