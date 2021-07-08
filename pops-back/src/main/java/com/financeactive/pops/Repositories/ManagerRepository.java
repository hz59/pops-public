package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.Manager;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ManagerRepository extends CrudRepository<Manager,Long> {

    Iterable<Manager> findAll();
    List<Manager> findByName(String manager_name);
}
