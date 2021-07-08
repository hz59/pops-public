package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.Service;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ServiceRepository extends CrudRepository<Service,Long> {

    Iterable<Service> findAll();
    List<Service> findById(int id);
}
