package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.Location;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LocationRepository extends CrudRepository<Location,Long> {

    Iterable<Location> findAll();
    List<Location> findById(int id);
}
