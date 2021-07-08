package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.UsersRole;
import org.springframework.data.repository.CrudRepository;
import java.util.List;


public interface UserRoleRepository extends CrudRepository<UsersRole, Long> {

    Iterable<UsersRole> findAll();
    List<UsersRole> findUsersRoleByType(String type);
}
