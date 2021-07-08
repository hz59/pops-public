package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.Contract;
import org.springframework.data.repository.CrudRepository;

public interface ContractRepository extends CrudRepository<Contract,Long> {

    Iterable<Contract> findAll();

}
