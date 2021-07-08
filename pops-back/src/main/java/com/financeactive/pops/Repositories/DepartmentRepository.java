package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.Department;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DepartmentRepository extends CrudRepository<Department,Long> {

    Iterable<Department> findAll();
    List<Department> findById(int id);
}
