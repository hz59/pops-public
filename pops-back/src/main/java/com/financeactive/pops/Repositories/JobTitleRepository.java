package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.JobTitle;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JobTitleRepository extends CrudRepository<JobTitle,Long> {

    Iterable<JobTitle> findAll();
    List<JobTitle> findById(int id);
}
