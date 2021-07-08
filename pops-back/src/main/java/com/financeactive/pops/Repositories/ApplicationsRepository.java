package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.App;
import org.springframework.data.repository.CrudRepository;

public interface ApplicationsRepository extends CrudRepository<App,Long> {

    Iterable<App> findAll();

}
