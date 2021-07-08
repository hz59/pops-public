package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.BusinessUnit;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BusinessUnitRepository extends CrudRepository<BusinessUnit,Long> {

    Iterable<BusinessUnit> findAll();
    List<BusinessUnit> findById(int id);
}
